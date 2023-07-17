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
            ->query("") 
            ->fetchAll(\PDO::FETCH_ASSOC);

            return $productsAwaitingRelease;

    }


}


?>