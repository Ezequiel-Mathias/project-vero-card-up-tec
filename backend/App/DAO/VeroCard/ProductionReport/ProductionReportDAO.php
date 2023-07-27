<?php
    namespace App\DAO\VeroCard\ProductionReport;
    use App\DAO\VeroCard\Connection;
    use App\Models\ProductionReportModel;

    class ProductionReportDAO extends Connection{
    
        public function __construct()
        {
            parent::__construct();
        }
    
    
        public function FilterbyDescriptionProductsAndProductCode(ProductionReportModel $productionReport , string $desc_produto) : array {

            $statement = $this -> pdo
            ->prepare("SELECT desc_produto , 
            saldo_atual 
            , ativo 
            , cod_produto
            , desc_material 
            , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
            , qtd_entrada
            , media FROM view_verocard_estoque WHERE ativo=:ativo AND desc_produto ILIKE '%".$desc_produto."%' AND  cod_produto = :cod_produto LIMIT 10;");
            
            $statement -> execute(['ativo' => $productionReport -> getActive(), 'cod_produto' => $productionReport -> getCodProduto()]);

            $response = $statement -> fetchAll(\PDO::FETCH_ASSOC);
            
            return $response;
        }


        public function FilterbyProductCode(ProductionReportModel $productionReport) : array {

            $statement = $this -> pdo
            ->prepare("SELECT desc_produto , 
            saldo_atual 
            , ativo 
            , cod_produto
            , desc_material 
            , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
            , qtd_entrada
            , media FROM view_verocard_estoque WHERE ativo=:ativo AND  cod_produto = :cod_produto LIMIT 10;");
            
            $statement -> execute(['ativo' => $productionReport -> getActive(), 'cod_produto' => $productionReport -> getCodProduto()]);

            $response = $statement -> fetchAll(\PDO::FETCH_ASSOC);
            
            return $response;
        }


        public function FilterbyDescriptionProduto(ProductionReportModel $productionReport , string $desc_produto): array {

            $statement = $this -> pdo
            ->prepare("SELECT desc_produto , 
            saldo_atual 
            , ativo 
            , cod_produto
            , desc_material 
            , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
            , qtd_entrada
            , media FROM view_verocard_estoque WHERE ativo=:ativo AND desc_produto ILIKE '%".$desc_produto."%'");
            
            $statement -> execute(['ativo' => $productionReport -> getActive()]);

            $response = $statement -> fetchAll(\PDO::FETCH_ASSOC);
            
            return $response;
        }

        public function FilterbyActive(ProductionReportModel $productionReport) : array {

            $statement = $this -> pdo
            ->prepare("SELECT desc_produto , 
            saldo_atual 
            , ativo 
            , cod_produto
            , desc_material 
            , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
            , qtd_entrada
            , media FROM view_verocard_estoque WHERE ativo=:ativo ");
            
            $statement -> execute(['ativo' => $productionReport -> getActive()]);

            $response = $statement -> fetchAll(\PDO::FETCH_ASSOC);
            
            return $response;
        }

    }
