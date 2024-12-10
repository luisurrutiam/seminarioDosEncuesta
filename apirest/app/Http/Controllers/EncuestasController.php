<?php

namespace App\Http\Controllers;

use App\Models\Encuesta;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EncuestasController extends Controller
{
    public function create(Request $request){

        $validator = Validator::make($request->all(),[
            'nombre' => 'required:encuestas,nombre|min:1',
            'institucion_id' => 'required:encuestas,institucion_id|min:1'
        ]);

        if($validator->fails()){
            return new JsonResponse([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $encuesta = Encuesta::create([
            'nombre' => $request->nombre,
            'institucion_id' => $request->institucion_id
        ]);

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Se guardo correctamente',
            'encuesta' => $encuesta
        ], 200);
    }


    public function getEncuestas(){

        $encuestas = Encuesta::all();

        return response()->json($encuestas);

    }

    public function getEncuesta($id){

        $encuesta = Encuesta::find($id);

        if(!$encuesta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        return response()->json($encuesta);

    }


    public function updateEncuesta(Request $request, $id){

        $encuesta = Encuesta::find($id);

        if(!$encuesta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        $validator = Validator::make($request->all(),[
            'nombre' => 'min:1',
            'institucion_id' => 'min:1'
        ]);

        if($validator->fails()){
            return new JsonResponse([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $encuesta->update([
            'nombre' => $request->nombre ,
            'institucion_id' => $request->institucion_id,
        ]);

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Datos actualizados',
            'encuesta' => $encuesta
        ], 200);
        
    }

    public function delete($id){

        $encuesta = Encuesta::find($id);

        if(!$encuesta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        $encuesta->delete();

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Encuesta eliminada',
            'encuesta' => $encuesta
        ], 200);
    }
}
