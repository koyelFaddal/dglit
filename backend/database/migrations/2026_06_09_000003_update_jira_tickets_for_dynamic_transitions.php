<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('jira_tickets', function (Blueprint $table): void {
            $table->json('jira_transition_response')->nullable()->after('jira_response');
        });
    }

    public function down(): void
    {
        Schema::table('jira_tickets', function (Blueprint $table): void {
            $table->dropColumn('jira_transition_response');
        });
    }
};
