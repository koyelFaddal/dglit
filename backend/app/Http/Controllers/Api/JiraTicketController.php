<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JiraTicketAttachment;
use App\Services\ErrorLogService;
use App\Services\JiraTicketService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class JiraTicketController extends Controller
{
    public function __construct(
        private readonly JiraTicketService $tickets,
        private readonly ErrorLogService $errorLog,
    ) {
    }

    public function store(Request $request): JsonResponse
    {
        $traceId = 'support-ticket-'.now()->format('YmdHis').'-'.Str::random(8);

        Log::info('Support ticket API request received', [
            'trace_id' => $traceId,
            'payload_keys' => array_keys($request->except(['attachments'])),
            'attachment_count' => count((array) $request->file('attachments', [])),
        ]);

        try {
            $validator = Validator::make($request->all(), [
                'name' => ['required', 'string', 'max:120'],
                'email' => ['required', 'email', 'max:150'],
                'subject' => ['required', 'string', 'max:200'],
                'issue_category' => ['required', 'string', 'max:120'],
                'priority' => ['required', 'string', 'max:50'],
                'message' => ['required', 'string', 'max:10000'],
                'attachments' => ['nullable', 'array', 'max:5'],
                'attachments.*' => [
                    'file',
                    'max:51200',
                    'mimes:jpg,jpeg,png,gif,webp,mp4,mov,avi,webm,pdf,doc,docx,xls,xlsx,csv,txt,rtf,zip',
                ],
            ]);

            if ($validator->fails()) {
                Log::warning('Support ticket validation failed', [
                    'trace_id' => $traceId,
                    'errors' => $validator->errors()->toArray(),
                ]);

                return response()->json([
                    'status' => 'error',
                    'message' => 'Please check the support form and try again.',
                    'errors' => $validator->errors(),
                    'trace_id' => $traceId,
                ], 422);
            }

            $ticket = $this->tickets->create(
                $validator->validated(),
                (array) $request->file('attachments', [])
            );

            Log::info('Support ticket API request completed', [
                'trace_id' => $traceId,
                'ticket_id' => $ticket->id,
                'jira_ticket_key' => $ticket->jira_ticket_key,
                'jira_issue_id' => $ticket->jira_issue_id,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Your support ticket has been created successfully.',
                'data' => [
                    'ticket_number' => $ticket->id,
                    'jira_ticket_key' => $ticket->jira_ticket_key,
                    'jira_issue_id' => $ticket->jira_issue_id,
                    'status' => $ticket->status,
                ],
                'trace_id' => $traceId,
            ], 201);
        } catch (\Throwable $exception) {
            $this->recordSupportTicketException($exception, 'Support ticket API request failed', $traceId, [
                'payload_keys' => array_keys($request->except(['attachments'])),
                'attachment_count' => count((array) $request->file('attachments', [])),
            ]);

            $response = [
                'status' => 'error',
                'message' => 'Unable to create your support ticket right now. Please try again.',
                'errors' => [],
                'trace_id' => $traceId,
            ];

            if (config('app.debug')) {
                $response['debug'] = [
                    'exception' => get_class($exception),
                    'message' => $exception->getMessage(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ];
            }

            return response()->json($response, 500);
        }
    }

    public function downloadAttachment(Request $request, JiraTicketAttachment $attachment)
    {
        if (! $request->hasValidSignature()) {
            abort(403);
        }

        if (! Storage::disk('local')->exists($attachment->attachment_path)) {
            abort(404);
        }

        return Storage::disk('local')->download(
            $attachment->attachment_path,
            $attachment->attachment_name,
            ['Content-Type' => $attachment->attachment_type ?: 'application/octet-stream']
        );
    }

    private function recordSupportTicketException(\Throwable $exception, string $context, string $traceId, array $extra = []): void
    {
        Log::error($context, [
            'trace_id' => $traceId,
            'exception' => get_class($exception),
            'message' => $exception->getMessage(),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
            'extra' => $extra,
            'trace' => $exception->getTraceAsString(),
        ]);

        try {
            $this->errorLog->record($exception, $context.' Trace ID: '.$traceId);
        } catch (\Throwable $loggingException) {
            Log::error('Failed to save support ticket exception into error_logs table', [
                'trace_id' => $traceId,
                'original_exception' => get_class($exception),
                'original_message' => $exception->getMessage(),
                'logging_exception' => get_class($loggingException),
                'logging_message' => $loggingException->getMessage(),
                'logging_file' => $loggingException->getFile(),
                'logging_line' => $loggingException->getLine(),
            ]);
        }
    }
}
