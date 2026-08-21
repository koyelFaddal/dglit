<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JiraTicketAttachment extends Model
{
    protected $fillable = [
        'jira_ticket_id',
        'attachment_name',
        'attachment_path',
        'attachment_type',
        'attachment_size',
        'jira_attachment_id',
        'jira_attachment_filename',
        'jira_attachment_response',
        'jira_attachment_error',
    ];

    protected $casts = [
        'jira_attachment_response' => 'array',
    ];

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(JiraTicket::class, 'jira_ticket_id');
    }
}
