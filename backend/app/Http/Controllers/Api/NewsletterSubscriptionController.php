<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscription;
use App\Services\ErrorLogService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsletterSubscriptionController extends Controller
{
    public function __construct(private readonly ErrorLogService $errorLog)
    {
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email:rfc', 'max:255'],
        ], [
            'email.required' => 'Please enter your email address.',
            'email.email' => 'Please enter a valid email address.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Please enter a valid email address.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $email = strtolower(trim($validator->validated()['email']));

        try {
            $subscription = NewsletterSubscription::firstOrCreate(['email' => $email]);

            if (! $subscription->wasRecentlyCreated) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'You have already subscribed to our newsletter.',
                    'errors' => [],
                ], 409);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Thank you for subscribing to our newsletter.',
                'data' => ['id' => $subscription->id],
            ], 201);
        } catch (\Throwable $exception) {
            $this->errorLog->record($exception, 'Newsletter subscription failed');

            return $this->errorResponse();
        }
    }

    private function errorResponse(): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Unable to subscribe. Please try again.',
            'errors' => [],
        ], 500);
    }
}
