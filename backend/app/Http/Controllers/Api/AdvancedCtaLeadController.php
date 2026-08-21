<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AdvancedCtaLead;
use App\Services\ErrorLogService;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class AdvancedCtaLeadController extends Controller
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
            'company_name' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
            'menu_type' => ['required', 'integer', Rule::in(array_keys(AdvancedCtaLead::MENU_TYPES))],
            'uploaded_document' => ['nullable', 'file', 'max:10240'],
        ]);

        $validated['email'] = strtolower($validated['email']);

        if (AdvancedCtaLead::query()
            ->where('email', $validated['email'])
            ->where('menu_type', $validated['menu_type'])
            ->exists()) {
            return $this->duplicateResponse();
        }

        $uploadedPath = null;

        try {
            if ($request->hasFile('uploaded_document')) {
                $file = $request->file('uploaded_document');
                $directory = 'advanced-cta-documents/'.now()->format('Y').'/'.now()->format('m');
                $extension = $file->getClientOriginalExtension();
                $storedName = now()->format('YmdHis').'-'.Str::uuid().($extension ? '.'.$extension : '');
                $uploadedPath = Storage::disk('public')->putFileAs($directory, $file, $storedName);
                $validated['uploaded_document'] = $uploadedPath;
            } else {
                unset($validated['uploaded_document']);
            }

            $lead = AdvancedCtaLead::create($validated);

            return response()->json([
                'status' => 'success',
                'message' => 'Thank you for your interest. Our team will contact you shortly.',
                'data' => ['id' => $lead->id],
            ], 201);
        } catch (QueryException $exception) {
            if ($uploadedPath) {
                Storage::disk('public')->delete($uploadedPath);
            }

            if ($exception->getCode() === '23000') {
                return $this->duplicateResponse();
            }

            $this->errorLog->record($exception, 'Advanced CTA lead submission failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to submit your request. Please try again.',
                'errors' => [],
            ], 500);
        } catch (\Throwable $exception) {
            if ($uploadedPath) {
                Storage::disk('public')->delete($uploadedPath);
            }

            $this->errorLog->record($exception, 'Advanced CTA lead submission failed');

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
            'message' => 'Already registered. Our team will contact you shortly.',
            'data' => [],
        ]);
    }
}
