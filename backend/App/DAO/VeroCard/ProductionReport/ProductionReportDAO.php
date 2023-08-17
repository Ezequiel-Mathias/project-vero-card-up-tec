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

    public function getProductionReportFilterFileDAO(ProductionReportModel $productionReportModel): array
    {

        $statement = $this->pdo->prepare("SELECT * from view_verocard_producao_tarja WHERE nome_arquivo_proc = :arquivo");

        $statement->execute(['arquivo' => $productionReportModel-> getFile()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterDateDAO(ProductionReportModel $productionReportModel): array
    {

        $statement = $this->pdo->prepare("SELECT * from view_verocard_producao_tarja where dt_processamento BETWEEN :datainicial AND :datafinal ;");

        $statement->execute(['datainicial' => $productionReportModel-> getInitialProcessinDate() , 'datafinal' => $productionReportModel-> getFinalProcessinDate() ]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterShippingDAO(ProductionReportModel $productionReportModel): array
    {
        $statement = $this->pdo->prepare("SELECT * from view_verocard_producao_tarja where dt_expedicao BETWEEN :expedicaoinicial AND :expedicaofinal ;");

        $statement->execute(['expedicaoinicial' => $productionReportModel-> getInitialShippingdate() , 'expedicaofinal' => $productionReportModel-> getFinalShippingdate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }


    public function getProductionReportFilterDatesInGeneralDAO(ProductionReportModel $productionReportModel): array
    {
        $statement = $this->pdo->prepare("SELECT * FROM view_verocard_producao_tarja where dt_expedicao BETWEEN :expedicaoinicial AND :expedicaofinal OR dt_processamento BETWEEN :datainicial AND :datafinal;");

        $statement->execute(['expedicaoinicial' => $productionReportModel-> getInitialShippingdate() , 'expedicaofinal' => $productionReportModel-> getFinalShippingdate() , 'datainicial' => $productionReportModel-> getInitialProcessinDate() , 'datafinal' => $productionReportModel-> getFinalProcessinDate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

}
