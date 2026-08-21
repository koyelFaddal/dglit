<?php

namespace App\Mail;

use App\Models\JiraTicket;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class JiraTicketCreatedForTeam extends Mailable
{
    use Queueable, SerializesModels;

    public JiraTicket $ticket;

    public array $attachmentLinks;

    public function __construct(JiraTicket $ticket, array $attachmentLinks = [])
    {
        $this->ticket = $ticket;
        $this->attachmentLinks = $attachmentLinks;
    }

    public function build(): self
    {
        return $this
            ->subject('New Support Ticket: '.$this->ticket->jira_ticket_key)
            ->view('emails.jira-ticket-created-team', [
                'ticket' => $this->ticket,
                'attachmentLinks' => $this->attachmentLinks,
                'attachments' => $this->attachmentLinks,
            ]);
    }
}
