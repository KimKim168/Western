<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Western/Index');
});
Route::get('/history_and_values', function () {
    return Inertia::render('Western/HistoryAndValuse/Index');
})->name('history_and_values');
Route::get('/school_facilities', function () {
    return Inertia::render('Western/SchoolFacilities/Index');
})->name('school_facilities');
Route::get('/our_campuses', function () {
    return Inertia::render('Western/OurCampuses/Index');
})->name('our_campuses');
Route::get('/curriculum', function () {
    return Inertia::render('Western/Curriculum/Index');
})->name('curriculum');
Route::get('/programs', function () {
    return Inertia::render('Western/Programs/Index');
})->name('programs');
