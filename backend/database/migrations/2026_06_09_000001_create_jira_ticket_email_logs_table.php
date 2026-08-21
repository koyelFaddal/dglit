<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jira_ticket_email_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jira_ticket_id')->constrained('jira_tickets')->cascadeOnDelete();
            $table->string('type');
            $table->string('recipient');
            $table->string('subject');
            $table->string('status')->default('pending');
            $table->text('error_message')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jira_ticket_email_logs');
    }
};
