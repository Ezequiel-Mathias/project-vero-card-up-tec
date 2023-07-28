<?php
namespace App\Controllers\ProductionReport;
use App\DAO\VeroCard\ProductionReport\ProductionReportDAO;
use App\Models\ProductionReportModel;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class ProductionReportController
{  

    public function ProductionReport(Request $request, Response $response, array $args): Response
    {

        

        $response = $response -> withJson('testando mane');
      
        return $response;
    }
}



?>