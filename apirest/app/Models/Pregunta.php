<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
    use HasFactory;

    protected $table = 'preguntas';

    protected $fillable = [
        'enunciado',
        'tipopregunta_id',
        'encuesta_id',
    ];
}
