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
            ->query("SELECT 
            id_ordem_producao_status , 
            id_op,  
            to_char(dt_status, 'DD/MM/YYYY') AS dt_status,
            to_char(dt_finalizado, 'DD/MM/YYYY') AS dt_finalizado
            FROM ordem_producao_status WHERE id_cliente = 34 AND status = 0 AND finalizado = 0 
            ORDER BY id_ordem_producao_status DESC ;") 
            ->fetchAll(\PDO::FETCH_ASSOC);

            return $productsAwaitingRelease;

    }


}
