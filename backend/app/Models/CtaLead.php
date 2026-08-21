<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CtaLead extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'city',
        'source_type',
        'cta_button',
    ];

    protected $casts = [
        'source_type' => 'integer',
    ];
}
