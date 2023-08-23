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

    public function getProductionReportFilterFileTarjaDAO(ProductionReportModel $productionReportModel): array
    {

        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status from view_verocard_producao_tarja WHERE nome_arquivo_proc = :arquivo");

        $statement->execute(['arquivo' => $productionReportModel->getFile()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterDateTarjaDAO(ProductionReportModel $productionReportModel): array
    {

        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status from view_verocard_producao_tarja where dt_processamento BETWEEN :datainicial AND :datafinal ;");

        $statement->execute(['datainicial' => $productionReportModel->getInitialProcessinDate(), 'datafinal' => $productionReportModel->getFinalProcessinDate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterShippingTarjaDAO(ProductionReportModel $productionReportModel): array
    {
        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status from view_verocard_producao_tarja where dt_expedicao BETWEEN :expedicaoinicial AND :expedicaofinal ;");

        $statement->execute(['expedicaoinicial' => $productionReportModel->getInitialShippingdate(), 'expedicaofinal' => $productionReportModel->getFinalShippingdate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }


    public function getProductionReportFilterDatesInGeneralTarjaDAO(ProductionReportModel $productionReportModel): array
    {
        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status from view_verocard_producao_tarja where dt_expedicao BETWEEN :expedicaoinicial AND :expedicaofinal OR dt_processamento BETWEEN :datainicial AND :datafinal;");

        $statement->execute(['expedicaoinicial' => $productionReportModel->getInitialShippingdate(), 'expedicaofinal' => $productionReportModel->getFinalShippingdate(), 'datainicial' => $productionReportModel->getInitialProcessinDate(), 'datafinal' => $productionReportModel->getFinalProcessinDate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function TESTE(): array
    {
        $statement = $this->pdo->query("SELECT * FROM view_verocard_producao_tarja LIMIT 20");

        $statement->execute();

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterFileChipDAO(ProductionReportModel $productionReportModel): array
    {

        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status , rastreio from view_verocard_producao_chip WHERE nome_arquivo_proc = :arquivo");

        $statement->execute(['arquivo' => $productionReportModel->getFile()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterDateChipDAO(ProductionReportModel $productionReportModel): array
    {

        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status , rastreio from view_verocard_producao_chip where dt_processamento BETWEEN :datainicial AND :datafinal ;");

        $statement->execute(['datainicial' => $productionReportModel->getInitialProcessinDate(), 'datafinal' => $productionReportModel->getFinalProcessinDate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function getProductionReportFilterShippingChipDAO(ProductionReportModel $productionReportModel): array
    {
        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status , rastreio from view_verocard_producao_chip where dt_expedicao BETWEEN :expedicaoinicial AND :expedicaofinal ;");

        $statement->execute(['expedicaoinicial' => $productionReportModel->getInitialShippingdate(), 'expedicaofinal' => $productionReportModel->getFinalShippingdate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }


    public function getProductionReportFilterDatesInGeneralChipDAO(ProductionReportModel $productionReportModel): array
    {
        $statement = $this->pdo->prepare("SELECT cod_produto, 
        desc_produto ,
         to_char(dt_processamento, 'DD/MM/YYYY') AS dt_processamento, 
         to_char(dt_expedicao, 'DD/MM/YYYY') AS dt_expedicao,
         nome_arquivo_proc
        total_cartoes, status , rastreio FROM view_verocard_producao_chip where dt_expedicao BETWEEN :expedicaoinicial AND :expedicaofinal OR dt_processamento BETWEEN :datainicial AND :datafinal;");

        $statement->execute(['expedicaoinicial' => $productionReportModel->getInitialShippingdate(), 'expedicaofinal' => $productionReportModel->getFinalShippingdate(), 'datainicial' => $productionReportModel->getInitialProcessinDate(), 'datafinal' => $productionReportModel->getFinalProcessinDate()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }
}
