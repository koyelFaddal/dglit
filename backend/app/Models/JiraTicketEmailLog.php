<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'jira_ticket_id',
    'type',
    'recipient',
    'subject',
    'status',
    'error_message',
    'sent_at',
])]
class JiraTicketEmailLog extends Model
{
    protected function casts(): array
    {
        return [
            'sent_at' => 'datetime',
        ];
    }

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(JiraTicket::class, 'jira_ticket_id');
    }
}
