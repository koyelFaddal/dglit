<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreJobApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'job_id' => ['required', 'integer', 'exists:ai_jobs,id'],
            'full_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email:rfc', 'max:255'],
            'phone_number' => ['required', 'string', 'max:40', 'regex:/^[0-9+\-().\s]{7,40}$/'],
            'city' => ['string', 'max:255'],
            'portfolio_url' => ['nullable', 'url', 'max:255'],
            'major_experience' => ['required', 'string', 'max:255'],
            'years_of_experience' => ['required', 'string', 'max:100'],
            'present_salary' => ['nullable', 'string', 'max:100'],
            'notice_period' => ['nullable', 'string', 'max:100'],
            'ai_challenge' => ['required', 'string', 'max:5000'],
            'resume' => [
                'required',
                'file',
                'max:10240',
                'extensions:pdf',
                'mimes:pdf',
                'mimetypes:application/pdf,application/x-pdf',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'job_id.required' => 'Please select a position.',
            'job_id.exists' => 'The selected position is no longer available.',
            'phone_number.regex' => 'Please enter a valid phone number.',
            'resume.required' => 'Please upload your resume as a PDF.',
            'resume.extensions' => 'Only PDF resumes are allowed.',
            'resume.mimes' => 'Only PDF resumes are allowed.',
            'resume.mimetypes' => 'Only PDF resumes are allowed.',
            'resume.max' => 'The resume may not be larger than 10 MB.',
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            $file = $this->file('resume');

            if (! $file || ! $file->isValid()) {
                $validator->errors()->add('resume', 'The resume upload failed. Please try again.');
                return;
            }

            $handle = @fopen($file->getRealPath(), 'rb');
            $signature = $handle ? fread($handle, 5) : false;

            if ($handle) {
                fclose($handle);
            }

            if ($signature !== '%PDF-') {
                $validator->errors()->add('resume', 'The resume must be a valid PDF file.');
            }
        });
    }
}
