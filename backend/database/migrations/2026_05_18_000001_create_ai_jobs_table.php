<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ai_jobs', function (Blueprint $table): void {
            $table->id();
            $table->string('job_title')->index();
            $table->string('position')->index();
            $table->longText('overview');
            $table->longText('responsibilities');
            $table->longText('required_skills');
            $table->longText('preferred_skills');
            $table->string('experience_required');
            $table->string('salary');
            $table->bigInteger('job_post_date');
            $table->string('preview_image');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ai_jobs');
    }
};
