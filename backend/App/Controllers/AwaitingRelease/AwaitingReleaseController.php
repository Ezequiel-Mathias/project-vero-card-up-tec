<?php

namespace App\Controllers\AwaitingRelease;

use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class AwaitingReleaseController
{   

    public function AwaitingRelease(Request $request, Response $response, array $args): Response
    {
        
        $response = $response -> withJson([
            'teste'
        ]);
        
        
        return $response; 
    }
}
