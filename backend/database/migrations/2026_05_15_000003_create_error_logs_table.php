<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('error_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lead_id')->nullable()->constrained('leads')->nullOnDelete();
            $table->string('file_path');
            $table->unsignedInteger('line_number');
            $table->string('short_message');
            $table->text('full_error_message');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('error_logs');
    }
};