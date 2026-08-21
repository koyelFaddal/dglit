<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AiResource;
use App\Models\AiResourceDownloadTracker;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PublicResourceController extends Controller
{
    /**
     * Return active resources that have downloadable files.
     */
    public function index(): JsonResponse
    {
        $resources = AiResource::query()
            ->select([
                'id',
                'title',
                'description',
                'file',
                'file_original_name',
                'file_size',
                'file_mime_type',
                'file_extension',
                'preview_image',
                'post_date',
                'is_active',
            ])
            ->where('is_active', true)
            ->whereNotNull('file')
            ->latest('id')
            ->take(8)
            ->get()
            ->map(fn (AiResource $resource): array => $this->formatResource($resource));

        return response()->json([
            'status' => 'success',
            'message' => 'Resources loaded successfully.',
            'data' => $resources,
        ]);
    }

    /**
     * Store lead/download tracking data before returning the resource URL.
     */
    public function trackDownload(Request $request, AiResource $aiResource): JsonResponse
    {
        abort_if(! $aiResource->is_active || ! $aiResource->file, 404);

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email:rfc', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Please fix the highlighted fields.',
                'errors' => $validator->errors(),
            ], 422);
        }

        if (! Storage::disk('public')->exists($aiResource->file)) {
            return response()->json([
                'status' => 'error',
                'message' => 'This resource file is currently unavailable.',
                'errors' => [],
            ], 404);
        }

        $formData = collect($request->except(['resource_id']))
            ->mapWithKeys(fn ($value, $key) => [Str::snake($key) => is_array($value) ? $value : trim((string) $value)])
            ->all();

        $tracker = AiResourceDownloadTracker::create([
            'ai_resource_id' => $aiResource->id,
            'name' => $formData['name'] ?? null,
            'email' => $formData['email'] ?? null,
            'phone' => $formData['phone'] ?? null,
            'company' => $formData['company'] ?? $formData['company_name'] ?? null,
            'form_data' => $formData,
            'ip_address' => $request->ip(),
            'user_agent' => (string) $request->userAgent(),
            'downloaded_at' => now(),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Resource download started.',
            'data' => [
                'tracker_id' => $tracker->id,
                'resource' => $this->formatResource($aiResource),
                'download_url' => asset('storage/'.$aiResource->file),
                'file_name' => $aiResource->file_original_name ?: basename($aiResource->file),
            ],
        ], 201);
    }

    private function formatResource(AiResource $resource): array
    {
        return [
            'id' => $resource->id,
            'title' => $resource->title,
            'description' => $resource->description,
            'file_name' => $resource->file_original_name ?: ($resource->file ? basename($resource->file) : null),
            'file_size' => $resource->file_size,
            'file_size_readable' => $this->readableFileSize((int) $resource->file_size),
            'file_extension' => $resource->file_extension,
            'file_mime_type' => $resource->file_mime_type,
            'preview_image_url' => $resource->preview_image ? asset('storage/'.$resource->preview_image) : null,
            'post_date' => $resource->post_date,
            'post_date_readable' => $resource->post_date ? date('M d, Y', (int) $resource->post_date) : null,
        ];
    }

    private function readableFileSize(int $bytes): string
    {
        if ($bytes <= 0) {
            return '-';
        }

        $units = ['B', 'KB', 'MB', 'GB'];
        $power = min((int) floor(log($bytes, 1024)), count($units) - 1);
        $size = $bytes / (1024 ** $power);

        return round($size, $power === 0 ? 0 : 1).' '.$units[$power];
    }
}