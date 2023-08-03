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

        var_dump($data['arquivo'] , $data['tipo'] , $data['dataInicial'] , $data['dataFinal'] , $data['expedicaoInicial'] , $data['expedicaoFinal']);
        $response = $response -> withJson('');
      
        return $response;
    }
}



?>