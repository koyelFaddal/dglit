<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Services\ErrorLogService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    public function __construct(private readonly ErrorLogService $errorLog)
    {
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['nullable', 'email:rfc', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40', 'regex:/^[0-9+\-().\s]{7,40}$/'],
            'file' => ['nullable', 'file', 'max:10240'],
            'attachment' => ['nullable', 'file', 'max:10240'],
            'upload' => ['nullable', 'file', 'max:10240'],
        ], [
            'phone.regex' => 'Please enter a valid phone number.',
            '*.max' => 'The uploaded file may not be larger than 10 MB.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Please fix the highlighted fields.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $file = $request->file('file') ?: $request->file('attachment') ?: $request->file('upload');
        $storedFile = null;

        try {
            if ($file) {
                $directory = 'contact-files/'.now()->format('Y').'/'.now()->format('m');
                $extension = $file->getClientOriginalExtension();
                $storedName = now()->format('YmdHis').'-'.Str::uuid().($extension ? '.'.$extension : '');
                $path = Storage::disk('public')->putFileAs($directory, $file, $storedName);

                $storedFile = [
                    'file_original_name' => basename(str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $file->getClientOriginalName())),
                    'file_stored_name' => $storedName,
                    'file_path' => $path,
                    'file_mime_type' => $file->getMimeType(),
                    'file_size' => $file->getSize(),
                ];
            }

            $formData = collect($request->except(['file', 'attachment', 'upload']))
                ->mapWithKeys(fn ($value, $key) => [Str::snake($key) => is_array($value) ? $value : trim((string) $value)])
                ->all();

            $contact = Contact::create([
                'name' => $formData['name'] ?? $formData['full_name'] ?? null,
                'company' => $formData['company'] ?? $formData['company_name'] ?? null,
                'email' => $formData['email'] ?? $formData['email_address'] ?? null,
                'phone' => $formData['phone'] ?? $formData['phone_number'] ?? null,
                'services' => $formData['services'] ?? $formData['service'] ?? $formData['service_interested_in'] ?? null,
                'form_data' => $formData,
                ...($storedFile ?? []),
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Contact message submitted successfully.',
                'data' => ['id' => $contact->id],
            ], 201);
        } catch (\Throwable $exception) {
            if ($storedFile && isset($storedFile['file_path'])) {
                Storage::disk('public')->delete($storedFile['file_path']);
            }

            $this->errorLog->record($exception, 'Contact form submission failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to submit contact message. Please try again.',
                'errors' => [],
            ], 500);
        }
    }
}
