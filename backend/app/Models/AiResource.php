<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AiResource extends Model
{
    protected $table = 'ai_resources';

    protected $fillable = [
        'title',
        'description',
        'file',
        'file_original_name',
        'file_size',
        'file_mime_type',
        'file_extension',
        'preview_image',
        'post_date',
        'is_active',
    ];

    protected $casts = [
        'file_size' => 'integer',
        'post_date' => 'integer',
        'is_active' => 'boolean',
    ];
}