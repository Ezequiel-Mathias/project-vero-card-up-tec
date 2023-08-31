<?php

namespace App\Middlewares;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class adminConference{

   public function __invoke(Request $request , Response $response , callable $next) : Response 
   {
    $subjectToken = $request -> getAttribute('jwt');

    if($subjectToken['admin'] === "0"){
        try {

            throw new \Exception("Você não está autorizado!, somente adms podem acessar essa rota");

        } catch (\Exception | \Throwable $ex) {

            return $response->withJson([
                'error' => \Exception::class,
                'status' => 404,
                'code' => "002",
                'userMessage' => 'Não autorizado',
                'developerMessage' => $ex->getMessage()
            ], 422);

        }

    }
    $response = $next($request , $response);
    
    return $response;
    
   }

   
}
