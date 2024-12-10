<?php

namespace App\Http\Controllers;

use App\Models\Pregunta;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PreguntasController extends Controller
{
    public function create(Request $request){

        $validator = Validator::make($request->all(),[
            'enunciado' => 'required:preguntas,enunciado|min:1',
            'tipopregunta_id' => 'required:preguntas,tipopregunta_id|min:1',
            'encuesta_id' => 'required:preguntas,encuesta_id|min:1',
        ]);

        if($validator->fails()){
            return new JsonResponse([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $pregunta = Pregunta::create([
            'enunciado' => $request->enunciado,
            'tipopregunta_id' => $request->tipopregunta_id,
            'encuesta_id' => $request->encuesta_id,
        ]);


        return new JsonResponse([
            'status' => 200,
            'msg' => 'se guardo correctamente',
            'pregunta' => $pregunta
        ], 200);
    }

    public function getPreguntas(){

        $preguntas = Pregunta::all();

        return response()->json($preguntas);
    }

    public function getPregunta($id){

        $pregunta = Pregunta::find($id);

        if(!$pregunta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        return response()->json($pregunta);
    }

    public function updatePregunta(Request $request, $id){

        $pregunta = Pregunta::find($id);

        if(!$pregunta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        $validator = Validator::make($request->all(),[
            'enunciado' => 'min:1',
            'tipopregunta_id' => 'min:1',
            'encuesta_id' => 'min:1',
        ]);

        if($validator->fails()){
            return new JsonResponse([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $pregunta->update([
            'enunciado' => $request->enunciado,
            'tipopregunta_id' => $request->tipopregunta_id,
            'encuesta_id' => $request->encuesta_id,
        ]);

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Datos actualizados',
            'pregunta' => $pregunta
        ], 200);

    }

    public function delete($id){

        $pregunta = Pregunta::find($id);

        if(!$pregunta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        $pregunta->delete();

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Pregunta eliminada',
            'pregunta' => $pregunta
        ], 200);

    }


}
