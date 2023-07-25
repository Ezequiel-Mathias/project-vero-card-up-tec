<?php
    namespace App\DAO\VeroCard\ProductionReport;
    use App\DAO\VeroCard\Connection;
    
    
    class ProductionReportDAO extends Connection{
    
        public function __construct()
        {
            parent::__construct();
        }
    
        public function getAllProductionReport(string $ativo  , string $desc_produto, string $cod_produto) : array {

            $products = $this -> pdo
            ->query("")->fetchAll(\PDO::FETCH_ASSOC);

            return $products;
        }

    }
?>