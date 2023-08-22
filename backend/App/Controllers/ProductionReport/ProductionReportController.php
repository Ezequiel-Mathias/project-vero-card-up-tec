<?php

namespace App\Controllers\ProductionReport;

use App\DAO\VeroCard\ProductionReport\ProductionReportDAO;
use App\Models\ProductionReportModel;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class ProductionReportController
{

    public function ProductionReport(Request $request, Response $response, array $args): Response
    {

        $data = $request->getParsedBody();

        if (
            empty(trim($data['arquivo'])) &&
            empty(trim($data['tipo'])) &&
            empty(trim($data['dataInicial'])) &&
            empty(trim($data['dataFinal'])) &&
            empty(trim($data['expedicaoInicial'])) &&
            empty(trim($data['expedicaoFinal']))
        ) {

            try {

                throw new \Exception("Preencha um dos campos para fazer a requisição");
            } catch (\Exception | \Throwable $ex) {

                return $response->withJson([
                    'error' => \Exception::class,
                    'status' => 400,
                    'code' => "002",
                    'userMessage' => 'Campos vazios, preencha um dos campos',
                    'developerMessage' => $ex->getMessage()
                ], 401);
            }
        }

        $productionReportModel = new ProductionReportModel();

        $productionReportDAO = new ProductionReportDAO();

        $productionReportModel
            ->setFile(trim($data['arquivo']))
            ->setCardType(trim($data['tipo']))
            ->setInitialProcessinDate(trim($data['dataInicial']))
            ->setFinalProcessinDate(trim($data['dataFinal']))
            ->setInitialShippingdate(trim($data['expedicaoInicial']))
            ->setFinalShippingdate(trim($data['expedicaoFinal']));


        if (!empty(trim($data['tipo'])) &&  $data['tipo']  === 'Tarja') {

            if (!empty(trim($data['arquivo']))) {

                $productionReport = $productionReportDAO->getProductionReportFilterFileTarjaDAO($productionReportModel);

            } else if (
                !empty(trim($data['dataInicial'])) && !empty(trim($data['dataFinal']))
                && empty(trim($data['expedicaoInicial'])) && empty(trim($data['expedicaoFinal']))
            ) {

                $productionReport = $productionReportDAO->getProductionReportFilterDateTarjaDAO($productionReportModel);

            } else if (
                !empty(trim($data['expedicaoInicial'])) && !empty(trim($data['expedicaoFinal']))
                && empty(trim($data['dataInicial'])) && empty(trim($data['dataFinal']))
            ) {

                $productionReport = $productionReportDAO->getProductionReportFilterShippingTarjaDAO($productionReportModel);

            } else if (
                !empty(trim($data['expedicaoInicial'])) && !empty(trim($data['expedicaoFinal']))
                && !empty(trim($data['dataInicial'])) && !empty(trim($data['dataFinal']))
            ) {

                $productionReport = $productionReportDAO->getProductionReportFilterDatesInGeneralTarjaDAO($productionReportModel);

            } else {

                $productionReport = "Preencha os campos corretamente!";

            }

        } else if (!empty(trim($data['tipo'])) &&  $data['tipo']  === 'Chip') {
            
            if (!empty(trim($data['arquivo']))) {

                $productionReport = $productionReportDAO->getProductionReportFilterFileChipDAO($productionReportModel);

            } else if (
                !empty(trim($data['dataInicial'])) && !empty(trim($data['dataFinal']))
                && empty(trim($data['expedicaoInicial'])) && empty(trim($data['expedicaoFinal']))
            ) {

                $productionReport = $productionReportDAO->getProductionReportFilterDateChipDAO($productionReportModel);

            } else if (
                !empty(trim($data['expedicaoInicial'])) && !empty(trim($data['expedicaoFinal']))
                && empty(trim($data['dataInicial'])) && empty(trim($data['dataFinal']))
            ) {

                $productionReport = $productionReportDAO->getProductionReportFilterShippingChipDAO($productionReportModel);

            } else if (
                !empty(trim($data['expedicaoInicial'])) && !empty(trim($data['expedicaoFinal']))
                && !empty(trim($data['dataInicial'])) && !empty(trim($data['dataFinal']))
            ) {

                $productionReport = $productionReportDAO->getProductionReportFilterDatesInGeneralChipDAO($productionReportModel);

            } else {

                $productionReport = "Preencha os campos corretamente!";

            }
        }

        $response = $response->withJson($productionReport);

        return $response;
    }

    public function Teste(Request $request, Response $response, array $args): Response
    {

        $productionReportDAO = new ProductionReportDAO();

        $productionReport = $productionReportDAO->TESTE();

        $response = $response->withJson($productionReport);

        return $response;
    }

}
