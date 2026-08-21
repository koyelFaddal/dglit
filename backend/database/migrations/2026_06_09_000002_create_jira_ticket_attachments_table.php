<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jira_ticket_attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jira_ticket_id')->constrained('jira_tickets')->cascadeOnDelete();
            $table->string('attachment_name');
            $table->string('attachment_path', 500);
            $table->string('attachment_type')->nullable();
            $table->unsignedBigInteger('attachment_size')->default(0);
            $table->string('jira_attachment_id')->nullable();
            $table->string('jira_attachment_filename')->nullable();
            $table->json('jira_attachment_response')->nullable();
            $table->text('jira_attachment_error')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jira_ticket_attachments');
    }
};
