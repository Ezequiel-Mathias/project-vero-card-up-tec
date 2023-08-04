<?php
namespace App\Controllers\ProductionReport;
use App\DAO\VeroCard\ProductionReport\ProductionReportDAO;

use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class ProductionReportController
{  

    public function ProductionReport(Request $request, Response $response, array $args): Response
    {

        $data = $request -> getParsedBody();

        $productionReportDAO = new ProductionReportDAO();

        if(!empty(trim($data['arquivo']))){
            $productionReport = $productionReportDAO -> getProductionReportFilterFileDAO($data['arquivo']);
        }

        

        $response = $response -> withJson($productionReport);
      
        return $response;
    }
}



?>