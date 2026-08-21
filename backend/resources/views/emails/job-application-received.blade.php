<!doctype html>
<html>
<body style="font-family: Arial, sans-serif; color: #111827;">
    <h2>New job application received</h2>
    <p><strong>Selected role:</strong> {{ $application->job_title_snapshot }}</p>

    <h3>Applicant details</h3>
    <ul>
        <li><strong>Full name:</strong> {{ $application->full_name }}</li>
        <li><strong>Email:</strong> {{ $application->email }}</li>
        <li><strong>Phone:</strong> {{ $application->phone_number }}</li>
        @if ($application->city)
            <li><strong>City:</strong> {{ $application->city }}</li>
        @endif
        <li><strong>Portfolio / LinkedIn:</strong> {{ $application->portfolio_url ?: 'Not provided' }}</li>
        <li><strong>Major experience:</strong> {{ $application->major_experience ?: 'Not provided' }}</li>
        <li><strong>Years of experience:</strong> {{ $application->years_of_experience }}</li>
         @if ($application->present_salary)
            <li>
                <strong>Present salary:</strong>
                {{ $application->present_salary }}
            </li>
        @endif

        @if ($application->notice_period)
            <li>
                <strong>Notice period:</strong>
                {{ $application->notice_period }}
            </li>
        @endif
        @if ($application->current_role)
            <li><strong>Current role:</strong> {{ $application->current_role }}</li>
        @endif
    </ul>

    @if ($application->skills)
        <h3>Skills / Expertise</h3>
        <p style="white-space: pre-line;">{{ $application->skills }}</p>
    @endif

    @if ($application->ai_challenge)
        <h3>Most complex AI challenge</h3>
        <p style="white-space: pre-line;">{{ $application->ai_challenge }}</p>
    @endif

    <h3>Resume</h3>
    <p>
        <a href="{{ $resumeUrl }}">Download resume</a>
    </p>
    <p style="font-size: 12px; color: #6b7280;">
        File: {{ $application->resume_file_name }} |
        Size: {{ number_format($application->resume_file_size / 1024, 1) }} KB |
        MIME: {{ $application->resume_mime_type }}
    </p>
</body>
</html>
