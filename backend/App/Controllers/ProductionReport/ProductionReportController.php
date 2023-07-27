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


        if(empty(trim($data['ativo'])) && empty(trim($data['desc_produto'])) && empty(trim($data['cod_produto']))){

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

        $desc_product = str_replace("'", " ", $data['desc_produto']);

        $productionReportModel -> setActive(trim(strtoupper($data['ativo'])))
        -> setCodProduto(trim($data['cod_produto'])); 


        if(!empty(trim($data['desc_produto'])) && !empty(trim($data['cod_produto']))){

            $productionData = $productionReportDAO -> FilterbyDescriptionProductsAndProductCode($productionReportModel , trim($desc_product));

        }else if (!empty($data['ativo']) && !empty(trim($data['cod_produto'])) && empty(trim($desc_product))){

            $productionData = $productionReportDAO -> FilterbyProductCode($productionReportModel);
            
        }else if(!empty(trim($desc_product)) && !empty($data['ativo'])){
            
            $productionData = $productionReportDAO -> FilterbyDescriptionProduto($productionReportModel , trim($desc_product));

        }else{
            $productionData = $productionReportDAO -> FilterbyActive($productionReportModel);
        }

        $response = $response -> withJson($productionData);
      
        return $response;
    }
}



?>