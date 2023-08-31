<?php

namespace App\Middlewares;

use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class jwtDateTime{

   public function __invoke(Request $request , Response $response , callable $next) : Response 
   {
    $token = $request -> getAttribute('jwt');

    $expireDate = new \DateTime($token['expired_at']);

    $now = new \DateTime();
    
    if($expireDate < $now)
        try{
            throw new \Exception("Token inesxistente ou invalido");
    
        }catch(\Exception | \Throwable $ex){
    
            return $response -> withJson([
                'error' => \Exception::class,
                'status' => 400,
                'code' => "002",
                'userMessage' => 'Você não está autorizado tente novamente mais tarde',
                'developerMessage' => $ex -> getMessage()
            ] , 401);
    
    }
    
    $response = $next($request , $response);
    
    return $response;
   }

   
}