<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFutureOpeningApplicationRequest;
use App\Http\Requests\StoreJobApplicationRequest;
use App\Mail\JobApplicationReceived;
use App\Models\AiJob;
use App\Models\JobApplication;
use App\Services\ErrorLogService;
use App\Services\ResumeStorageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class JobApplicationController extends Controller
{
    public function __construct(
        private readonly ResumeStorageService $resumeStorage,
        private readonly ErrorLogService $errorLog,
    )
    {
    }

    public function store(StoreJobApplicationRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $job = AiJob::query()
            ->whereKey($validated['job_id'])
            ->where('is_published', true)
            ->first();

        if (! $job) {
            return response()->json([
                'status' => 'error',
                'message' => 'The selected position is no longer available.',
                'errors' => ['job_id' => ['The selected position is no longer available.']],
            ], 422);
        }

        $resume = null;

        try {
            DB::beginTransaction();

            $resume = $this->resumeStorage->store($request->file('resume'));
            $application = JobApplication::create([
                'job_id' => $job->id,
                'application_type' => 'job',
                'job_title_snapshot' => $job->job_title,
                'full_name' => $validated['full_name'],
                'email' => $validated['email'],
                'phone_number' => $validated['phone_number'],
                'portfolio_url' => $validated['portfolio_url'] ?? null,
                'major_experience' => $validated['major_experience'],
                'years_of_experience' => $validated['years_of_experience'],
                'ai_challenge' => $validated['ai_challenge'],
                'city' => $validated['city'] ?? null,
                'present_salary' => $validated['present_salary'] ?? null,
                'notice_period' => $validated['notice_period']  ?? null,
                ...$resume,
            ]);

            DB::commit();
        } catch (\Throwable $exception) {
            DB::rollBack();

            if ($resume && isset($resume['resume_file_path'])) {
                Storage::disk('local')->delete($resume['resume_file_path']);
            }

            $this->errorLog->record($exception, 'Job application submission failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to submit application. Please try again.',
                'errors' => [],
            ], 500);
        }

        $this->sendNotification($application);

        return response()->json([
            'status' => 'success',
            'message' => 'Application submitted successfully.',
            'data' => [
                'id' => $application->id,
                'job_id' => $application->job_id,
                'job_title' => $application->job_title_snapshot,
                'email_notification_sent' => $application->email_notification_sent_at !== null,
            ],
        ], 201);
    }

    public function storeFutureOpening(StoreFutureOpeningApplicationRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $resume = null;

        try {
            DB::beginTransaction();

            $resume = $this->resumeStorage->store($request->file('resume'));
            $application = JobApplication::create([
                'job_id' => 0,
                'application_type' => 'future_opening',
                'job_title_snapshot' => 'Future Opening',
                'full_name' => $validated['name'],
                'email' => $validated['email'],
                'phone_number' => $validated['phone'],
                'portfolio_url' => $validated['linkedin'] ?? null,
                'major_experience' => $validated['major_experience'],
                'years_of_experience' => $validated['experience'],
                'current_role' => $validated['role'],
                'skills' => $validated['skills'],
                'city' => $validated['city'] ?? null,
                'present_salary' => $validated['present_salary'] ?? null,
                'notice_period' => $validated['notice_period']  ?? null,
                ...$resume,
            ]);

            DB::commit();
        } catch (\Throwable $exception) {
            DB::rollBack();

            if ($resume && isset($resume['resume_file_path'])) {
                Storage::disk('local')->delete($resume['resume_file_path']);
            }

            $this->errorLog->record($exception, 'Future opening application submission failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to submit application. Please try again.',
                'errors' => [],
            ], 500);
        }

        $this->sendNotification($application);

        return response()->json([
            'status' => 'success',
            'message' => 'Resume submitted successfully.',
            'data' => [
                'id' => $application->id,
                'job_id' => 0,
                'job_title' => $application->job_title_snapshot,
                'email_notification_sent' => $application->email_notification_sent_at !== null,
            ],
        ], 201);
    }

    public function resume(Request $request, JobApplication $jobApplication)
    {
        if (! $request->hasValidSignature()) {
            abort(403);
        }

        if (! Storage::disk('local')->exists($jobApplication->resume_file_path)) {
            abort(404);
        }

        return Storage::disk('local')->download(
            $jobApplication->resume_file_path,
            $jobApplication->resume_file_name,
            ['Content-Type' => $jobApplication->resume_mime_type]
        );
    }

    private function sendNotification(JobApplication $application): void
    {
        $receiver = config('job_applications.receiver_email');

        if (! $receiver) {
            $application->forceFill([
                'email_notification_error' => 'JOB_APPLICATION_RECEIVER_EMAIL is not configured.',
            ])->save();
            $this->errorLog->recordMessage(
                'Job application email receiver missing',
                'JOB_APPLICATION_RECEIVER_EMAIL is not configured for job application ID '.$application->id,
                __FILE__,
                __LINE__,
            );
            return;
        }

        if (in_array(config('mail.default'), ['log', 'array'], true)) {
            $message = 'Mail is configured with MAIL_MAILER='.config('mail.default').', so no real email will be sent.';
            $application->forceFill([
                'email_notification_error' => $message,
            ])->save();
            $this->errorLog->recordMessage(
                'Job application email not sent',
                $message.' Job application ID: '.$application->id.'. Receiver: '.$receiver,
                __FILE__,
                __LINE__,
            );
            return;
        }

        $resumeUrl = URL::temporarySignedRoute(
            'job-applications.resume',
            now()->addDays(7),
            ['jobApplication' => $application->id]
        );

        try {
            Mail::to($receiver)->send(new JobApplicationReceived($application, $resumeUrl));
            $application->forceFill([
                'email_notification_sent_at' => now(),
                'email_notification_error' => null,
            ])->save();
        } catch (\Throwable $exception) {
            $application->forceFill([
                'email_notification_error' => $exception->getMessage(),
            ])->save();
            $this->errorLog->record($exception, 'Job application email failed');
        }
    }
}
