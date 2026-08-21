<?php

use App\Http\Controllers\Admin\AdminPageController;
use App\Http\Controllers\Admin\AdvancedCtaLeadController;
use App\Http\Controllers\Admin\AiJobController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CtaLeadController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\JiraTicketController;
use App\Http\Controllers\Admin\JobApplicationController;
use App\Http\Controllers\Admin\ResourceController;
use App\Http\Controllers\Admin\NewsletterController;
use Illuminate\Support\Facades\Route;

Route::get('/fix-storage-link-dgl-2026', function () {
    $token = request('token');

    if ($token !== 'dgl-storage-link-2026') {
        abort(404);
    }

    $target = '/home3/dgldev/dglit/storage/app/public';
    $link = '/home3/dgldev/public_html/dglit/storage';

    if (! is_dir($target)) {
        return response("Storage target does not exist: {$target}", 500)
            ->header('Content-Type', 'text/plain');
    }

    if (is_link($link)) {
        return response("Storage link already exists: {$link} -> " . readlink($link), 200)
            ->header('Content-Type', 'text/plain');
    }

    if (file_exists($link)) {
        return response("Path already exists but is not a symlink: {$link}", 409)
            ->header('Content-Type', 'text/plain');
    }

    if (! symlink($target, $link)) {
        return response("Failed to create storage link. Try running it from cPanel terminal.", 500)
            ->header('Content-Type', 'text/plain');
    }

    return response("Storage link created: {$link} -> {$target}", 200)
        ->header('Content-Type', 'text/plain');
});

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware('guest')->group(function (): void {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.store');
});

Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function (): void {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/resources', [AdminPageController::class, 'resources'])->name('resources');
    Route::get('/resources/data', [ResourceController::class, 'index'])->name('resources.data');
    Route::post('/resources', [ResourceController::class, 'store'])->name('resources.store');
    Route::get('/resources/{aiResource}', [ResourceController::class, 'show'])->name('resources.show');
    Route::post('/resources/{aiResource}', [ResourceController::class, 'update'])->name('resources.update');
    Route::delete('/resources/{aiResource}', [ResourceController::class, 'destroy'])->name('resources.destroy');
    Route::get('/career/jobs', [AdminPageController::class, 'jobs'])->name('career.jobs');
    Route::get('/career/jobs/data', [AiJobController::class, 'index'])->name('career.jobs.data');
    Route::post('/career/jobs', [AiJobController::class, 'store'])->name('career.jobs.store');
    Route::get('/career/jobs/{aiJob}', [AiJobController::class, 'show'])->name('career.jobs.show');
    Route::post('/career/jobs/{aiJob}', [AiJobController::class, 'update'])->name('career.jobs.update');
    Route::delete('/career/jobs/{aiJob}', [AiJobController::class, 'destroy'])->name('career.jobs.destroy');
    Route::get('/career/applications', [AdminPageController::class, 'applications'])->name('career.applications');
    Route::get('/career/applications/data', [JobApplicationController::class, 'index'])->name('career.applications.data');
    Route::post('/career/applications/resumes/download', [JobApplicationController::class, 'bulkResumeDownload'])->name('career.applications.resumes.download');
    Route::get('/career/applications/{jobApplication}', [JobApplicationController::class, 'show'])->name('career.applications.show');
    Route::get('/career/applications/{jobApplication}/resume', [JobApplicationController::class, 'resume'])->name('career.applications.resume');
    Route::delete('/career/applications/{jobApplication}', [JobApplicationController::class, 'destroy'])->name('career.applications.destroy');
    Route::get('/contact', [AdminPageController::class, 'contact'])->name('contact');
    Route::get('/contact/data', [ContactController::class, 'index'])->name('contact.data');
    Route::get('/contact/{contact}', [ContactController::class, 'show'])->name('contact.show');
    Route::get('/contact/{contact}/file', [ContactController::class, 'file'])->name('contact.file');
    Route::delete('/contact/{contact}', [ContactController::class, 'destroy'])->name('contact.destroy');
    Route::get('/jira-tickets', [JiraTicketController::class, 'index'])->name('jira-tickets.index');
    Route::get('/jira-tickets/{jiraTicket}', [JiraTicketController::class, 'show'])->name('jira-tickets.show');
    Route::patch('/jira-tickets/{jiraTicket}/status', [JiraTicketController::class, 'updateStatus'])->name('jira-tickets.status');
    Route::get('/jira-ticket-attachments/{attachment}', [JiraTicketController::class, 'attachment'])->name('jira-tickets.attachments.download');
    Route::get('/cta/ai-insight/{sourceType}', [AdminPageController::class, 'ctaLeads'])->whereNumber('sourceType')->name('cta.ai-insight');
    Route::get('/cta/ai-insight/{sourceType}/data', [CtaLeadController::class, 'index'])->whereNumber('sourceType')->name('cta.ai-insight.data');
    Route::delete('/cta/leads/{ctaLead}', [CtaLeadController::class, 'destroy'])->name('cta.leads.destroy');
    Route::get('/cta/ai-training/{menuType}', [AdminPageController::class, 'advancedCtaLeads'])->whereNumber('menuType')->name('cta.ai-training');
    Route::get('/cta/ai-training/{menuType}/data', [AdvancedCtaLeadController::class, 'index'])->whereNumber('menuType')->name('cta.ai-training.data');
    Route::get('/cta/ai-solution/{menuType}', [AdminPageController::class, 'advancedCtaLeads'])->whereNumber('menuType')->name('cta.ai-solution');
    Route::get('/cta/ai-solution/{menuType}/data', [AdvancedCtaLeadController::class, 'index'])->whereNumber('menuType')->name('cta.ai-solution.data');
    Route::get('/cta/advanced-leads/{advancedCtaLead}/document', [AdvancedCtaLeadController::class, 'document'])->name('cta.advanced-leads.document');
    Route::post('/cta/advanced-leads/documents/download', [AdvancedCtaLeadController::class, 'bulkDocumentDownload'])->name('cta.advanced-leads.documents.download');
    Route::delete('/cta/advanced-leads/{advancedCtaLead}', [AdvancedCtaLeadController::class, 'destroy'])->name('cta.advanced-leads.destroy');
    Route::get('/change-password', [AuthController::class, 'showChangePassword'])->name('change-password');
    Route::post('/change-password', [AuthController::class, 'updatePassword'])->name('change-password.update');
    Route::get('/newsletter', [NewsletterController::class, 'index'])->name('newsletter.index');
    Route::post('/newsletter/{newsletterSubscription}/send', [NewsletterController::class, 'send'])->name('newsletter.send');
    Route::get('/newsletter/{newsletterSubscription}/history', [NewsletterController::class, 'history'])->name('newsletter.history');
    Route::get('/newsletter/{newsletterSubscription}/history/{newsletterSentMail}', [NewsletterController::class, 'showMail'])->name('newsletter.history.show');
    Route::get('/newsletter/{newsletterSubscription}/history/{newsletterSentMail}/attachment', [NewsletterController::class, 'attachment'])->name('newsletter.history.attachment');

});
