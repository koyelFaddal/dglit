<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'jira_ticket_key',
    'jira_issue_id',
    'name',
    'email',
    'subject',
    'issue_category',
    'priority',
    'message',
    'status',
    'jira_response',
    'jira_transition_response',
    'team_notification_sent_at',
    'team_notification_error',
    'status_notification_sent_at',
    'status_notification_error',
])]
class JiraTicket extends Model
{
    public const STATUS_OPEN = 'Open';
    public const STATUS_IN_PROGRESS = 'In Progress';
    public const STATUS_DONE = 'Done';
    public const STATUS_REOPENED = 'Reopened';

    protected function casts(): array
    {
        return [
            'jira_response' => 'array',
            'jira_transition_response' => 'array',
            'team_notification_sent_at' => 'datetime',
            'status_notification_sent_at' => 'datetime',
        ];
    }

    public static function statuses(): array
    {
        return [
            self::STATUS_OPEN,
            self::STATUS_IN_PROGRESS,
            self::STATUS_DONE,
            self::STATUS_REOPENED,
        ];
    }

    public function attachments(): HasMany
    {
        return $this->hasMany(JiraTicketAttachment::class);
    }

    public function emailLogs(): HasMany
    {
        return $this->hasMany(JiraTicketEmailLog::class);
    }
}
