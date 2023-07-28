<?php
    namespace App\Controllers\Stock;

use App\DAO\VeroCard\Stock\StockDAO;
use App\Models\StockModel;
use Psr\Http\Message\ServerRequestInterface as Request;
    use Slim\Http\Response as Response;

    final class StockController
    {  

        public function StockFilter(Request $request, Response $response, array $args): Response
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
        
        $stockModel = new StockModel(); 

        $stockDAO = new StockDAO();

        $desc_product = str_replace("'", " ", $data['desc_produto']);

        $stockModel -> setActive(trim(strtoupper($data['ativo'])))
        -> setCodProduto(trim($data['cod_produto'])); 


        if(!empty(trim($data['desc_produto'])) && !empty(trim($data['cod_produto']))){

            $stockData = $stockDAO -> FilterbyDescriptionProductsAndProductCode($stockModel , trim($desc_product));

        }else if (!empty($data['ativo']) && !empty(trim($data['cod_produto'])) && empty(trim($desc_product))){

            $stockData = $stockDAO -> FilterbyProductCode($stockModel);
            
        }else if(!empty(trim($desc_product)) && !empty($data['ativo'])){
            
            $stockData = $stockDAO -> FilterbyDescriptionProduto($stockModel , trim($desc_product));

        }else{
            $stockData = $stockDAO -> FilterbyActive($stockModel);
        }

        $response = $response -> withJson($stockData);
      
        return $response;

        }

    }
?>