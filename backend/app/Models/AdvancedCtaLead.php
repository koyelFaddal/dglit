<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdvancedCtaLead extends Model
{
    public const MENU_TYPES = [
        1 => 'Prompt Engineering',
        2 => 'AI Automation & Workflows',
        3 => 'Generative AI',
        4 => 'AI for Professionals',
        5 => 'AI for Business Growth',
        6 => 'AI Careers & Freelancing',
        7 => 'Enterprise AI Training',
        8 => 'AI for Government Institutions',
        9 => 'AI Strategy & Consulting',
        10 => 'Custom AI Development',
        11 => 'Generative AI Solutions',
        12 => 'AI Automation Solutions',
        13 => 'AI Chatbots & Assistants',
        14 => 'AI Analytics & Intelligence',
        15 => 'AI Integration Services',
        16 => 'Solutions by Industry',
    ];

    protected $fillable = [
        'name',
        'email',
        'phone',
        'city',
        'company_name',
        'message',
        'uploaded_document',
        'menu_type',
    ];

    protected $casts = [
        'menu_type' => 'integer',
    ];

    public function getMenuTypeLabelAttribute(): string
    {
        return self::MENU_TYPES[$this->menu_type] ?? 'Unknown';
    }
}
