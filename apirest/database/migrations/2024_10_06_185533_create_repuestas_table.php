<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('repuestas', function (Blueprint $table) {
            $table->id();
            $table->json('respuesta');
            $table->unsignedBigInteger('encuesta_id'); 
            $table->foreign('encuesta_id')->references('id')->on('encuestas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repuestas');
    }
};
