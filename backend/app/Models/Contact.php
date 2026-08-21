<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'company',
        'email',
        'phone',
        'services',
        'form_data',
        'file_original_name',
        'file_stored_name',
        'file_path',
        'file_mime_type',
        'file_size',
    ];

    protected $casts = [
        'form_data' => 'array',
    ];
}
