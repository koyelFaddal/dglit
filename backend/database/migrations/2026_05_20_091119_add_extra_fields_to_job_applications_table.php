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
        Schema::table('job_applications', function (Blueprint $table) {
            $table->string('city')->nullable()->after('phone_number');
            $table->string('present_salary')->nullable()->after('years_of_experience');
            $table->string('notice_period')->nullable()->after('present_salary');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_applications', function (Blueprint $table) {
            $table->dropColumn([
                'city',
                'present_salary',
                'notice_period',
            ]);
        });
    }
};
