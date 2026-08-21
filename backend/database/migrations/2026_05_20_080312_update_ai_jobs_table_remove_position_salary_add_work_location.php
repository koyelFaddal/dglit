<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::table('ai_jobs', function (Blueprint $table) {

            // remove old columns
            $table->dropColumn(['position', 'salary']);

            // add new column
            $table->string('work_location', 255)->after('job_title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ai_jobs', function (Blueprint $table) {

            // restore removed columns
            $table->string('position')->nullable();
            $table->string('salary')->nullable();

            // remove new column
            $table->dropColumn('work_location');
        });
    }
};
