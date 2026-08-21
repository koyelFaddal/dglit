<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AiJob;
use Illuminate\Http\JsonResponse;

class PublicJobController extends Controller
{
    public function index(): JsonResponse
    {
        $jobs = AiJob::query()
            ->select([
                'id',
                'job_title',
                'work_location',
                'overview',
                'responsibilities',
                'required_skills',
                'preferred_skills',
                'experience_required',
                'job_post_date',
                'preview_image',
            ])
            ->where('is_published', true)
            ->latest('id')
            ->get()
            ->map(fn (AiJob $job): array => $this->formatJob($job));

        return response()->json([
            'status' => 'success',
            'message' => 'Jobs loaded successfully',
            'data' => $jobs,
        ]);
    }

    public function show(AiJob $aiJob): JsonResponse
    {
        abort_if(! $aiJob->is_published, 404);

        return response()->json([
            'status' => 'success',
            'message' => 'Job loaded successfully',
            'data' => $this->formatJob($aiJob),
        ]);
    }

    private function formatJob(AiJob $job): array
    {
        return [
            'id' => $job->id,
            'title' => $job->job_title,
            'job_title' => $job->job_title,
            'work_location' => $job->work_location,
            'overview' => $job->overview,
            'responsibilities' => $job->responsibilities,
            'required_skills' => $job->required_skills,
            'preferred_skills' => $job->preferred_skills,
            'experience_required' => $job->experience_required,
            'job_post_date' => $job->job_post_date,
            'job_post_date_readable' => date('M d, Y', (int) $job->job_post_date),
            'preview_image' => $job->preview_image ? 'storage/'.$job->preview_image : null,
            'preview_image_url' => $job->preview_image ? asset('storage/'.$job->preview_image) : null,
        ];
    }
}
