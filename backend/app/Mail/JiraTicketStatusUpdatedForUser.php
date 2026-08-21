<?php

namespace App\Mail;

use App\Models\JiraTicket;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class JiraTicketStatusUpdatedForUser extends Mailable
{
    use SerializesModels;

    public function __construct(
        public JiraTicket $ticket,
        public string $previousStatus,
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(subject: 'Support Ticket Status Updated');
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.jira-ticket-status-updated-user',
            with: [
                'ticket' => $this->ticket,
                'previousStatus' => $this->previousStatus,
            ],
        );
    }
}
