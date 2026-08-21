<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AiResourceDownloadTracker extends Model
{
    protected $table = 'ai_resources_download_tracker';

    protected $fillable = [
        'ai_resource_id',
        'name',
        'email',
        'phone',
        'company',
        'form_data',
        'ip_address',
        'user_agent',
        'downloaded_at',
    ];

    protected $casts = [
        'form_data' => 'array',
        'downloaded_at' => 'datetime',
    ];

    public function resource()
    {
        return $this->belongsTo(AiResource::class, 'ai_resource_id');
    }
}