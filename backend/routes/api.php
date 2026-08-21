<?php

use App\Http\Controllers\Api\AdvancedCtaLeadController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CtaLeadController;
use App\Http\Controllers\Api\JiraTicketController;
use App\Http\Controllers\Api\JobApplicationController;
use App\Http\Controllers\Api\NewsletterSubscriptionController;
use App\Http\Controllers\Api\PublicJobController;
use App\Http\Controllers\Api\PublicResourceController;
use Illuminate\Support\Facades\Route;

// Route::post('/contact', [ContactController::class, 'store']);
Route::get('/jobs', [PublicJobController::class, 'index']);
Route::get('/jobs/{aiJob}', [PublicJobController::class, 'show']);
Route::post('/job-applications', [JobApplicationController::class, 'store']);
Route::post('/future-opening-applications', [JobApplicationController::class, 'storeFutureOpening']);
Route::post('/support-tickets', [JiraTicketController::class, 'store']);
Route::post('/newsletter-subscriptions', [NewsletterSubscriptionController::class, 'store']);
Route::get('/support-tickets/attachments/{attachment}', [JiraTicketController::class, 'downloadAttachment'])
    ->name('support-tickets.attachments.download');
Route::get('/job-applications/{jobApplication}/resume', [JobApplicationController::class, 'resume'])
    ->name('job-applications.resume');
