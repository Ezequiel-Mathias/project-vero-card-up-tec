<?php

namespace App\Controllers\AwaitingRelease;

use App\DAO\VeroCard\AwaitingRelease\AwaitingReleaseDAO;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class AwaitingReleaseController
{   
    
    public function AwaitingRelease(Request $request, Response $response, array $args): Response
    {
        
        $productionDAO = new AwaitingReleaseDAO();

        $production = $productionDAO -> getAllAwaitingRelease();
        
        $response = $response -> withJson($production);

        return $response;
    
    }
}
