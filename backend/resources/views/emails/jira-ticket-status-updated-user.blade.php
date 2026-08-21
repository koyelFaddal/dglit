<h1>Support Ticket Status Updated</h1>

@php
    $displayPreviousStatus = strtolower(trim($previousStatus)) === 'pending' ? 'In Review' : $previousStatus;
    $displayCurrentStatus = strtolower(trim($ticket->status)) === 'pending' ? 'In Review' : $ticket->status;
@endphp

<p>Hello {{ $ticket->name }},</p>

<p>Your support ticket {{ $ticket->jira_ticket_key ?: '#'.$ticket->id }} has been updated.</p>

<table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
    <tr><th align="left">Ticket Number</th><td>{{ $ticket->jira_ticket_key ?: '#'.$ticket->id }}</td></tr>
    <tr><th align="left">Subject</th><td>{{ $ticket->subject }}</td></tr>
    <tr><th align="left">Previous Status</th><td>{{ $displayPreviousStatus }}</td></tr>
    <tr><th align="left">Current Status</th><td>{{ $displayCurrentStatus }}</td></tr>
    <tr><th align="left">Updated Date &amp; Time</th><td>{{ now()->format('M d, Y h:i A') }}</td></tr>
</table>

<p>Please review the update.</p>

<p>Thank you.</p>
