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

        

        if(!$data['ativo'] && !$data['desc_produto'] && !$data['cod_produto']){

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
        
        $productionReportModel = new ProductionReportModel(); 

        $productionReportDAO = new ProductionReportDAO();

        $productionReportModel -> setActive(strtoupper($data['ativo'])) -> setCodProduto($data['cod_produto']); 

        if($data['ativo'] && !$data['desc_produto'])
            $data['desc_produto'] = 'null';
        
        $productionData = $productionReportDAO -> getAllProductionReport($productionReportModel , $data['desc_produto']);

        $response = $response -> withJson($productionData);
      
        return $response;
    }
}



?>