<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Services\ErrorLogService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ContactController extends Controller
{
    public function __construct(private readonly ErrorLogService $errorLog)
    {
    }

    public function index(Request $request): JsonResponse
    {
        $search = trim((string) $request->query('search', ''));

        $contacts = Contact::query()
            ->select(['id', 'name', 'company', 'email', 'phone', 'services', 'created_at'])
            ->when($search !== '', function ($query) use ($search): void {
                $query->where(function ($query) use ($search): void {
                    $query->where('name', 'like', $search.'%')
                        ->orWhere('company', 'like', $search.'%')
                        ->orWhere('email', 'like', $search.'%')
                        ->orWhere('phone', 'like', $search.'%')
                        ->orWhere('services', 'like', $search.'%');
                });
            })
            ->latest('id')
            ->paginate(25)
            ->withQueryString();

        $contacts->getCollection()->transform(fn (Contact $contact): array => $this->formatContact($contact));

        return response()->json([
            'status' => 'success',
            'message' => 'Contacts loaded successfully',
            'data' => $contacts->items(),
            'meta' => [
                'current_page' => $contacts->currentPage(),
                'last_page' => $contacts->lastPage(),
                'per_page' => $contacts->perPage(),
                'total' => $contacts->total(),
                'from' => $contacts->firstItem(),
                'to' => $contacts->lastItem(),
            ],
        ]);
    }

    public function show(Contact $contact): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Contact loaded successfully',
            'data' => $this->formatContact($contact, true),
        ]);
    }

    public function file(Contact $contact)
    {
        if (! $contact->file_path || ! Storage::disk('public')->exists($contact->file_path)) {
            abort(404);
        }

        return Storage::disk('public')->download(
            $contact->file_path,
            $contact->file_original_name,
            ['Content-Type' => $contact->file_mime_type]
        );
    }

    public function destroy(Contact $contact): JsonResponse
    {
        try {
            if ($contact->file_path && Storage::disk('public')->exists($contact->file_path)) {
                Storage::disk('public')->delete($contact->file_path);
            }

            $contact->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Contact deleted successfully',
                'data' => [],
            ]);
        } catch (\Throwable $exception) {
            $this->errorLog->record($exception, 'Admin contact delete failed');

            return response()->json([
                'status' => 'error',
                'message' => 'Unable to delete contact. Please try again.',
                'errors' => [],
            ], 500);
        }
    }

    private function formatContact(Contact $contact, bool $includeDetails = false): array
    {
        $data = [
            'id' => $contact->id,
            'name' => $contact->name,
            'company' => $contact->company,
            'email' => $contact->email,
            'phone' => $contact->phone,
            'services' => $contact->services,
            'submitted_date' => optional($contact->created_at)->format('M d, Y'),
            'submitted_at' => optional($contact->created_at)->toDateTimeString(),
        ];

        if (! $includeDetails) {
            return $data;
        }

        return [
            ...$data,
            'form_data' => $contact->form_data ?: [],
            'file_original_name' => $contact->file_original_name,
            'file_stored_name' => $contact->file_stored_name,
            'file_path' => $contact->file_path,
            'file_mime_type' => $contact->file_mime_type,
            'file_size' => $contact->file_size,
            'has_file' => (bool) ($contact->file_path && Storage::disk('public')->exists($contact->file_path)),
            'file_url' => route('admin.contact.file', ['contact' => $contact->id]),
        ];
    }
}
