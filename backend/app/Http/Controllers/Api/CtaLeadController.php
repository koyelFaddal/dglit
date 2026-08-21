<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CtaLead;
use App\Services\ErrorLogService;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CtaLeadController extends Controller
{
    public function __construct(private readonly ErrorLogService $errorLog)
    {
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email:rfc', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40'],
            'city' => ['nullable', 'string', 'max:255'],
            'source_type' => ['required', 'integer', Rule::in([1, 2, 3, 4, 5, 6, 7])],
            'cta_button' => ['required', 'string', 'max:255'],
        ]);

        $validated['email'] = strtolower($validated['email']);

        if (CtaLead::query()
            ->where('email', $validated['email'])
            ->where('source_type', $validated['source_type'])
            ->exists()) {
            return $this->duplicateResponse();
        }

        try {
            $lead = CtaLead::create($validated);

            return response()->json([
                'status' => 'success',
                'message' => 'Thank you for your interest. Our team will contact you shortly.',
                'data' => ['id' => $lead->id],
            ], 201);
        } catch (QueryException $exception) {
            if ($exception->getCode() === '23000') {
                return $this->duplicateResponse();
            }

            $this->errorLog->record($exception, 'CTA lead submission failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to submit your request. Please try again.',
                'errors' => [],
            ], 500);
        } catch (\Throwable $exception) {
            $this->errorLog->record($exception, 'CTA lead submission failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to submit your request. Please try again.',
                'errors' => [],
            ], 500);
        }
    }

    private function duplicateResponse(): JsonResponse
    {
        return response()->json([
            'status' => 'duplicate',
            'message' => 'You have already submitted this form. Our team will contact you shortly.',
            'data' => [],
        ]);
    }
}
