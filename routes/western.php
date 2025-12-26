<?php

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

  

Route::get('/programs', function () {
    return Inertia::render('Western/Programs/Index');
})->name('programs');
Route::get('/school_calendar', function () {
    return Inertia::render('Western/SchoolCalendar/Index');
})->name(name: 'school_calendar');
Route::get('/class_schedules_and_subjects', function () {
    return Inertia::render('Western/ClassScheduleAndSubject/Index');
})->name('class_schedules_and_subjects');
 

Route::get('/student_services', function () {
    return Inertia::render('Western/StudentServices/Index');
})->name('student_services');
// 
Route::get('/activities_and_events', function () {
    return Inertia::render('Western/ActivitiesAndSvents/Index');
})->name('activities_and_events');
// 
Route::get('/extracurricular_activities', function () {
    return Inertia::render('Western/ExtracurricularActivities/Index');
})->name('extracurricular_activities');
Route::get('/outreach_programs', function () {
    return Inertia::render('Western/OutreachPrograms/Index');
})->name('outreach_programs');
Route::get('/student_council', function () {
    return Inertia::render('Western/StudentCouncil/Index');
})->name('student_council');
Route::get('/news_and_blogs', function () {
    return Inertia::render('Western/NewsAndBlogs/Index');
})->name('news_and_blogs');
Route::get('/detail', function () {
    return Inertia::render('Western/NewsAndBlogs/Detail');
});
Route::get('/contact', function () {
    return Inertia::render('Western/Contact');
})->name('contact');