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

        $ativo = $data['ativo'];

        $desc_produto = $data['desc_produto'];

        $cod_produto = $data['cod_produto'];

        if(!$ativo && !$desc_produto && !$cod_produto){
            try{

                throw new \Exception("Preencha um dos campos para fazer a requisição");

            }catch(\Exception | \Throwable $ex){

                return $response -> withJson([
                    'error' => \Exception::class,
                    'status' => 400,
                    'code' => "002",
                    'userMessage' => 'Campos vazios, preencha um dos campos',
                    'developerMessage' => $ex -> getMessage()
                ] , 401);

            }
        }

        $productionreportDAO = new ProductionReportDAO(); 

        $productionreport = $productionreportDAO -> getAllProductionReport($ativo , $desc_produto , $cod_produto);


        $response = $response -> $productionreport;

        return $response;
    }
}



?>