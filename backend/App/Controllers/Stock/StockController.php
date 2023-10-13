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

            $Data = $stockDAO -> FilterbyDescriptionProductsAndProductCode($stockModel , trim($desc_product));

            $DataDesc_Material = $stockDAO -> FilterbyDescriptionProductsAndProductCodeDesc_Material($stockModel , trim($desc_product));

            $stockData = [ $Data , $DataDesc_Material ];

        }else if (!empty($data['ativo']) && !empty(trim($data['cod_produto'])) && empty(trim($desc_product))){

            $Data = $stockDAO -> FilterbyProductCode($stockModel);

            $DataDesc_Material = $stockDAO -> FilterbyProductCodeDesc_Material($stockModel);

            $stockData = [ $Data , $DataDesc_Material ];
            
        }else if(!empty(trim($desc_product)) && !empty($data['ativo'])){

            $Data = $stockDAO -> FilterbyDescriptionProduto($stockModel , trim($desc_product));

            $DataDesc_Material = $stockDAO -> FilterbyDescriptionProdutoDesc_Material($stockModel , trim($desc_product));

            $stockData = [ $Data , $DataDesc_Material ];

        }else{

            $Data = $stockDAO -> FilterbyActive($stockModel);

            $DataDesc_Material = $stockDAO -> FilterbyActiveDesc_Material($stockModel);

            $stockData = [ $Data , $DataDesc_Material ];

        }

        $response = $response -> withJson($stockData);
        
        return $response;

        }

    }
