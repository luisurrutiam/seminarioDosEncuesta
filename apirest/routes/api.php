<?php

use App\Http\Controllers\InstitucionsController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/create', [UsersController::class, 'create']);
Route::get('/users', [UsersController::class, 'getUsers']);
Route::get('/user/{id}', [UsersController::class, 'getUser']);
Route::put('/user/{id}', [UsersController::class, 'updateUser']);
Route::delete('/user/{id}', [UsersController::class, 'delete']);

Route::post('/createInstitucion', [InstitucionsController::class, 'create']);
Route::get('/institucions', [InstitucionsController::class, 'getInstitucions']);
Route::get('/institucion/{id}', [InstitucionsController::class, 'getInstitucion']);
Route::put('/institucion/{id}', [InstitucionsController::class, 'updateInstitucion']);
Route::delete('/institucion/{id}', [InstitucionsController::class, 'delete']);
