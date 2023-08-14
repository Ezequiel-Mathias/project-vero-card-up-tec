<?php
namespace App\Controllers\Production;
use App\DAO\VeroCard\Production\ProductionDAO;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class ProductionController
{   

    public function Productsinproduction(Request $request, Response $response, array $args): Response
    {
        $productionDAO = new ProductionDAO();

        $production = $productionDAO -> getAllProductsInProduction();
        
        $response = $response -> withJson($production);

        return $response;
    }
}

?>