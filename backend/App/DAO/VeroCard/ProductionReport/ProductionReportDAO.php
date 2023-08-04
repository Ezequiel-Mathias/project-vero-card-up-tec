<?php

namespace App\DAO\VeroCard\ProductionReport;

use App\DAO\VeroCard\Connection;
use App\Models\ProductionReportModel;

class ProductionReportDAO extends Connection
{

    public function __construct()
    {
        parent::__construct();
    }

    public function getProductionReportFilterFileDAO( string $file) 
    {

        $statement = $this->pdo
            ->query("SELECT * from view_verocard_producao_tarja WHERE nome_arquivo_proc = ");


        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }
}
