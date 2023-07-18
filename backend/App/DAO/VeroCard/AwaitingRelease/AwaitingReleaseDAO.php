<?php

namespace App\DAO\VeroCard\AwaitingRelease;
use App\DAO\VeroCard\Connection;


class AwaitingReleaseDAO extends Connection{

    public function __construct()
    {
        parent::__construct();
    }

    public function getAllAwaitingRelease() : array {

        $productsAwaitingRelease = $this -> pdo
            ->query("SELECT * FROM ordem_producao_status WHERE id_cliente = 34 AND status = 0;") 
            ->fetchAll(\PDO::FETCH_ASSOC);

            return $productsAwaitingRelease;

    }


}


?>