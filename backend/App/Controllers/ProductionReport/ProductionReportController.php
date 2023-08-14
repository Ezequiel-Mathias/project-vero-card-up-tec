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

        $data = $request -> getParsedBody();

        $productionReportModel = new ProductionReportModel(); 

        $productionReportDAO = new ProductionReportDAO();

        $productionReportModel -> setFile(trim($data['arquivo'])) -> setCardType(trim($data['tipo']))
         -> setInitialProcessinDate(trim($data['dataInicial'])) -> setFinalProcessinDate(trim($data['expedicaoInicial']))
          -> setInitialshippingdate(trim($data['expedicaoFinal']));

        if(!empty(trim($data['arquivo']))){
            $productionReport = $productionReportDAO -> getProductionReportFilterFileDAO($data['arquivo']);
        }

        $response = $response -> withJson($productionReport);
      
        return $response;
    }
}



?>