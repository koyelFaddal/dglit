<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AiJob extends Model
{
    protected $table = 'ai_jobs';

    protected $fillable = [
        'job_title',
        'work_location',
        'overview',
        'responsibilities',
        'required_skills',
        'preferred_skills',
        'experience_required',
        'job_post_date',
        'preview_image',
        'is_published',
    ];

    protected $casts = [
        'job_post_date' => 'integer',
        'is_published' => 'boolean',
    ];

    public function applications()
    {
        return $this->hasMany(JobApplication::class, 'job_id');
    }
}
