<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jira_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('jira_ticket_key')->nullable()->index();
            $table->string('jira_issue_id')->nullable()->index();
            $table->string('name');
            $table->string('email');
            $table->string('subject');
            $table->string('issue_category');
            $table->string('priority');
            $table->text('message');
            $table->string('status')->default('Open')->index();
            $table->json('jira_response')->nullable();
            $table->timestamp('team_notification_sent_at')->nullable();
            $table->text('team_notification_error')->nullable();
            $table->timestamp('status_notification_sent_at')->nullable();
            $table->text('status_notification_error')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jira_tickets');
    }
};
