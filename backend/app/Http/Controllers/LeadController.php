<?php

namespace App\Http\Controllers;

use App\Models\ErrorLog;
use App\Models\Lead;
use App\Models\UserDeviceDetail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class LeadController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $lead = null;

        try {
            $validated = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'max:255'],
            ]);

            $lead = Lead::query()->updateOrCreate(
                ['email' => strtolower($validated['email'])],
                ['name' => $validated['name']]
            );

            $this->upsertDeviceDetails($lead, $request);

            return response()->json([
                'lead' => [
                    'name' => $lead->name,
                    'email' => $lead->email,
                ],
            ]);
        } catch (Throwable $e) {
            ErrorLog::query()->create([
                'lead_id' => $lead->id ?? null,
                'file_path' => $e->getFile(),
                'line_number' => $e->getLine(),
                'short_message' => substr($e->getMessage(), 0, 255),
                'full_error_message' => $e->getMessage(),
            ]);

            return response()->json([
                'status' => false,
                'message' => 'Something went wrong but system is still running',
            ]);
        }
    }

    private function upsertDeviceDetails(Lead $lead, Request $request): void
    {
        $userAgent = $request->userAgent() ?? '';
        $browserName = $this->browserNameFromUserAgent($userAgent);
        $physicalDeviceType = $this->physicalDeviceTypeFromUserAgent($userAgent);

        UserDeviceDetail::query()->updateOrCreate(
            [
                'user_id' => $lead->id,
                'physical_device_type' => $physicalDeviceType,
                'browser_name' => $browserName,
            ],
            [
                'device_info' => $this->deviceInfoFromUserAgent($userAgent),
                'user_agent' => $userAgent,
                'ip_address' => $request->ip(),
            ]
        );
    }

    private function browserNameFromUserAgent(string $userAgent): string
    {
        preg_match_all('/([A-Za-z][A-Za-z0-9_-]*)\/[\d.]+/', $userAgent, $matches);

        $ignoredTokens = [
            'Mozilla',
            'AppleWebKit',
            'KHTML',
            'Gecko',
            'Safari',
            'Version',
            'Mobile',
        ];

        $browserTokens = array_values(array_filter(
            $matches[1] ?? [],
            fn (string $token) => ! in_array($token, $ignoredTokens, true)
        ));

        return $browserTokens ? end($browserTokens) : 'Unknown Browser';
    }

    private function physicalDeviceTypeFromUserAgent(string $userAgent): string
    {
        if (preg_match('/tablet|ipad/i', $userAgent)) {
            return 'tablet';
        }

        if (preg_match('/mobile|android|iphone|ipod/i', $userAgent)) {
            return 'mobile';
        }

        return 'desktop';
    }

    private function deviceInfoFromUserAgent(string $userAgent): string
    {
        if (preg_match('/\((.*?)\)/', $userAgent, $matches)) {
            return $matches[1];
        }

        return 'Unknown Device';
    }
}