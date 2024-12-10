<?php

use App\Http\Controllers\EncuestasController;
use App\Http\Controllers\InstitucionsController;
use App\Http\Controllers\PreguntasController;
use App\Http\Controllers\TipopreguntasController;
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

Route::post('/createEncuesta', [EncuestasController::class, 'create']);
Route::get('/encuestas', [EncuestasController::class, 'getEncuestas']);
Route::get('/encuesta/{id}', [EncuestasController::class, 'getEncuesta']);
Route::put('/encuesta/{id}', [EncuestasController::class, 'updateEncuesta']);
Route::delete('/encuesta/{id}', [EncuestasController::class, 'delete']);

Route::post('/createTipopregunta', [TipopreguntasController::class, 'create']);
Route::get('/tipopreguntas', [TipopreguntasController::class, 'getTipopreguntas']);
Route::get('/tipopregunta/{id}', [TipopreguntasController::class, 'getTipopregunta']);
Route::put('/tipopregunta/{id}', [TipopreguntasController::class, 'updateTipopregunta']);
Route::delete('/tipopregunta/{id}', [TipopreguntasController::class, 'delete']);

Route::post('createPregunta', [PreguntasController::class, 'create']);
Route::get('preguntas', [PreguntasController::class, 'getPreguntas']);
Route::get('pregunta/{id}', [PreguntasController::class, 'getPregunta']);
Route::put('pregunta/{id}', [PreguntasController::class, 'updatePregunta']);
Route::delete('pregunta/{id}', [PreguntasController::class, 'delete']);

