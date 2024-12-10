<?php

namespace App\Http\Controllers;

use App\Models\Tipopregunta;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TipopreguntasController extends Controller
{
    public function create(Request $request){

        $validator = Validator::make($request->all(),[
            'nombre' => 'required:tipopreguntas,nombre|min:1',
            'opcion' => 'required:tipopreguntas,opcion|min:1',
        ]);
      
        if($validator->fails()){
            return new JsonResponse([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $tipopregunta = Tipopregunta::create([
            'nombre' => $request->nombre,
            'opcion' => $request->opcion
        ]);

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Se guardo correctamente',
            'tipopregunta' => $tipopregunta
        ], 200);
    }


    public function getTipopreguntas(){
        $tipopreguntas = Tipopregunta::all();

        return response()->json($tipopreguntas);
    }


    public function getTipopregunta($id){
        $tipopregunta = Tipopregunta::find($id);

        if(!$tipopregunta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        return response()->json($tipopregunta);
    }

    public function updateTipopregunta(Request $request, $id){
        $tipopregunta = Tipopregunta::find($id);

        if(!$tipopregunta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        $validator = Validator::make($request->all(),[
            'nombre' => 'required:tipopreguntas,nombre|min:1',
            'opcion' => 'required:tipopreguntas,opcion|min:1',
        ]);
      
        if($validator->fails()){
            return new JsonResponse([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $tipopregunta->update([
            'nombre' => $request->nombre,
            'opcion' => $request->opcion,
        ]);

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Datos actualizados',
            'tipopregunta' => $tipopregunta
        ], 200);
    }


    public function delete($id){
        
        $tipopregunta = Tipopregunta::find($id);

        if(!$tipopregunta){
            return new JsonResponse([
                'status' => 404,
                'msg' => 'No se encontro el id' .$id
            ], 404);
        }

        $tipopregunta->delete();

        return new JsonResponse([
            'status' => 200,
            'msg' => 'Tipopregunta eliminada',
            'tipopregunta' => $tipopregunta
        ], 200);
    }

}
