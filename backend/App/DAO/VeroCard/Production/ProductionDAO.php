<?php
namespace App\DAO\VeroCard\Production;
use App\DAO\VeroCard\Connection;


class ProductionDAO extends Connection{

    public function __construct()
    {
        parent::__construct();
    }

    public function getAllProductsInProduction() : array {
        $products = $this -> pdo
            ->query("")  
            ->fetchAll(\PDO::FETCH_ASSOC);

            return $products;
    }
}
