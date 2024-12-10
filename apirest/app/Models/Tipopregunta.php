<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipopregunta extends Model
{
    use HasFactory;

    protected $table = 'tipopreguntas';

    protected $fillable = [
        'nombre',
        'opcion',
    ];
}
