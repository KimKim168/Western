<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Western/Index');
});
Route::get('/history_and_values', function () {
    return Inertia::render('Western/HistoryAndValuse/Index');
})->name('history_and_values');
Route::get('/campaign_promotion', function () {
    return Inertia::render('Sesor/AboutUs/CampaignPromotion');
})->name('campaign_promotion');
Route::get('/service', function () {
    return Inertia::render('Sesor/Service/Index');
})->name('service');
