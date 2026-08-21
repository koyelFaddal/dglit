<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'jira' => [
        'url' => env('JIRA_URL'),
        'email' => env('JIRA_EMAIL'),
        'api_token' => env('JIRA_API_TOKEN'),
        'project_key' => env('JIRA_PROJECT_KEY'),
        'service_desk_id' => env('JIRA_SERVICE_DESK_ID'),
        'request_type_ids' => [
            'Website Bug' => env('JIRA_REQUEST_TYPE_ID_BUG'),
            'website bug' => env('JIRA_REQUEST_TYPE_ID_BUG'),
            'Website Change' => env('JIRA_REQUEST_TYPE_ID_CHANGE'),
            'website change' => env('JIRA_REQUEST_TYPE_ID_CHANGE'),
            'General Support' => env('JIRA_REQUEST_TYPE_ID_SUPPORT'),
            'general support' => env('JIRA_REQUEST_TYPE_ID_SUPPORT'),
            'default' => env('JIRA_REQUEST_TYPE_ID_DEFAULT'),
        ],
        'support_team_emails' => array_values(array_filter(array_map(
            'trim',
            explode(',', (string) env('JIRA_SUPPORT_TEAM_EMAILS', ''))
        ))),
    ],

];
