<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_applications', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('job_id')->default(0)->index();
            $table->string('application_type')->default('job')->index();
            $table->string('job_title_snapshot');
            $table->string('full_name');
            $table->string('email')->index();
            $table->string('phone_number', 40);
            $table->string('portfolio_url')->nullable();
            $table->string('years_of_experience', 100);
            $table->string('current_role')->nullable();
            $table->longText('skills')->nullable();
            $table->longText('ai_challenge')->nullable();
            $table->string('resume_file_name');
            $table->string('resume_file_path', 500);
            $table->unsignedBigInteger('resume_file_size');
            $table->string('resume_mime_type', 100);
            $table->timestamp('email_notification_sent_at')->nullable();
            $table->text('email_notification_error')->nullable();
            $table->timestamps();

            $table->index(['job_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
