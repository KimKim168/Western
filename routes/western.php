<?php

use App\Helpers\TelegramHelper;
use App\Http\Controllers\WesternFrontPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [WesternFrontPageController::class, 'index']);

Route::get('/admissions', [WesternFrontPageController::class, 'admissions']);

// About Page
Route::get('/history_and_values', [WesternFrontPageController::class, 'history_and_values']);
Route::get('/school_facilities', [WesternFrontPageController::class, 'school_facilities']);
Route::get('/our_campuses', [WesternFrontPageController::class, 'our_campuses']);
Route::get('/curriculum', [WesternFrontPageController::class, 'curriculum']);
Route::get('/programs', [WesternFrontPageController::class, 'programs']);
Route::get('/class_schedules_and_subjects', [WesternFrontPageController::class, 'class_schedules_and_subjects']);
Route::get('/school_calendar', [WesternFrontPageController::class, 'school_calendar']);

// School Life
Route::get('/student_services', [WesternFrontPageController::class, 'student_services']);
Route::get('/activities_and_events', [WesternFrontPageController::class, 'activities_and_events']);
Route::get('/extracurricular_activities', [WesternFrontPageController::class, 'extracurricular_activities']);
Route::get('/outreach_programs', [WesternFrontPageController::class, 'outreach_programs']);
Route::get('/student_council', [WesternFrontPageController::class, 'student_council']);

Route::get('/contact', [WesternFrontPageController::class, 'contact']);
Route::post('/sent_message', [WesternFrontPageController::class, 'sent_message']);


Route::get('/news_and_blogs', [WesternFrontPageController::class, 'posts']);
Route::get('/detail', function () {
    return Inertia::render('Western/NewsAndBlogs/Detail');
});


Route::get('/test_message', function () {
    $message = (object) [
        'name'    => 'Long Soeng',
        'phone'   => '+855 12 345 678',
        'email'   => 'longsoeng@example.com',
        'message' => 'Hello, I want more info about your service.'
    ];

    TelegramHelper::sendMessage($message);
});
