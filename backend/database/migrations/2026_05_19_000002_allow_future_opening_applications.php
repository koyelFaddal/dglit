<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('job_applications')) {
            return;
        }

        Schema::table('job_applications', function (Blueprint $table): void {
            if (! Schema::hasColumn('job_applications', 'application_type')) {
                $table->string('application_type')->default('job')->after('job_id')->index();
            }

            if (! Schema::hasColumn('job_applications', 'current_role')) {
                $table->string('current_role')->nullable()->after('years_of_experience');
            }

            if (! Schema::hasColumn('job_applications', 'skills')) {
                $table->longText('skills')->nullable()->after('current_role');
            }
        });

        if (DB::getDriverName() === 'mysql') {
            $database = DB::getDatabaseName();
            $foreignKey = DB::selectOne(
                "select constraint_name from information_schema.key_column_usage where table_schema = ? and table_name = 'job_applications' and column_name = 'job_id' and referenced_table_name = 'ai_jobs' limit 1",
                [$database],
            );

            if ($foreignKey) {
                DB::statement('alter table job_applications drop foreign key '.$foreignKey->constraint_name);
            }

            DB::statement('alter table job_applications modify job_id bigint unsigned not null default 0');
            DB::statement('alter table job_applications modify ai_challenge longtext null');
        }
    }

    public function down(): void
    {
        if (! Schema::hasTable('job_applications')) {
            return;
        }

        Schema::table('job_applications', function (Blueprint $table): void {
            if (Schema::hasColumn('job_applications', 'skills')) {
                $table->dropColumn('skills');
            }

            if (Schema::hasColumn('job_applications', 'current_role')) {
                $table->dropColumn('current_role');
            }

            if (Schema::hasColumn('job_applications', 'application_type')) {
                $table->dropColumn('application_type');
            }
        });
    }
};
