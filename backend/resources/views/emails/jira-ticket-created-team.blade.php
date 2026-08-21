<h1>New Support Ticket Submitted</h1>

<p>A new support request has been created from the DGL website.</p>

<table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
    <tr><th align="left">Jira Ticket</th><td>{{ $ticket->jira_ticket_key ?: '#'.$ticket->id }}</td></tr>
    <tr><th align="left">User Name</th><td>{{ $ticket->name }}</td></tr>
    <tr><th align="left">User Email</th><td>{{ $ticket->email }}</td></tr>
    <tr><th align="left">Subject</th><td>{{ $ticket->subject }}</td></tr>
    <tr><th align="left">Priority</th><td>{{ $ticket->priority }}</td></tr>
    <tr><th align="left">Issue Category</th><td>{{ $ticket->issue_category }}</td></tr>
    <tr><th align="left">Created Date &amp; Time</th><td>{{ optional($ticket->created_at)->format('M d, Y h:i A') }}</td></tr>
</table>

<h2>Issue Details</h2>
<p style="white-space: pre-line;">{{ $ticket->message }}</p>

@if (! empty($attachments))
    <h2>Attachments</h2>
    <ul>
        @foreach ($attachments as $attachment)
            <li>
                <a href="{{ $attachment['url'] }}">Download {{ $attachment['name'] }}</a>
                <br>
                <span style="font-size: 12px; color: #6b7280;">
                    Type: {{ $attachment['type'] ?: 'Unknown' }} |
                    Size: {{ number_format(($attachment['size'] ?? 0) / 1024, 1) }} KB
                </span>
            </li>
        @endforeach
    </ul>
@endif
