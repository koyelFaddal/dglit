<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'user_id',
    'browser_name',
    'device_info',
    'physical_device_type',
    'user_agent',
    'ip_address',
])]
class UserDeviceDetail extends Model
{
    public function lead(): BelongsTo
    {
        return $this->belongsTo(Lead::class, 'user_id');
    }
}