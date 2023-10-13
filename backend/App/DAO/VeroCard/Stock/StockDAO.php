<?php

namespace App\DAO\VeroCard\Stock;

use App\DAO\VeroCard\Connection;
use App\Models\StockModel;

class StockDAO extends Connection
{

    public function __construct()
    {
        parent::__construct();
    }

    public function FilterbyDescriptionProductsAndProductCode(StockModel $stockModel, string $desc_produto): array
    {

        $statement = $this->pdo
            ->prepare("SELECT desc_produto , 
        saldo_atual 
        , ativo 
        , cod_produto
        , desc_material 
        , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
        , qtd_entrada
        , media FROM view_verocard_estoque WHERE ativo=:ativo AND desc_produto ILIKE '%" . $desc_produto . "%' AND  cod_produto = :cod_produto;");

        $statement->execute(['ativo' => $stockModel->getActive(), 'cod_produto' => $stockModel->getCodProduto()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);



        return $response;
    }


    public function FilterbyDescriptionProductsAndProductCodeDesc_Material(StockModel $stockModel, string $desc_produto): array
    {

        $statementDescMaterial = $this->pdo
            ->prepare("SELECT 
    count( CASE  WHEN (desc_material = 'PLÁSTICO') THEN 1 END )AS total_plásticos 
    , count ( CASE WHEN (desc_material = 'ENVELOPE') THEN 1 END )AS total_envelopes , 
    count( CASE WHEN (desc_material = 'FOLHETERIA') THEN 1 END )AS total_folheterias FROM view_verocard_estoque WHERE ativo=:ativo AND desc_produto ILIKE '%" . $desc_produto . "%' AND  cod_produto = :cod_produto;");

        $statementDescMaterial->execute(['ativo' => $stockModel->getActive(), 'cod_produto' => $stockModel->getCodProduto()]);

        $response = $statementDescMaterial->fetchAll(\PDO::FETCH_ASSOC);

        return $response;

    }

    public function FilterbyProductCode(StockModel $stockModel): array
    {

        $statement = $this->pdo
            ->prepare("SELECT desc_produto , 
        saldo_atual 
        , ativo 
        , cod_produto
        , desc_material 
        , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
        , qtd_entrada
        , media FROM view_verocard_estoque WHERE ativo=:ativo AND  cod_produto = :cod_produto LIMIT 10;");

        $statement->execute(['ativo' => $stockModel->getActive(), 'cod_produto' => $stockModel->getCodProduto()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function FilterbyProductCodeDesc_Material(StockModel $stockModel): array
    {

        $statementDescMaterial = $this->pdo
            ->prepare("SELECT 
    count( CASE  WHEN (desc_material = 'PLÁSTICO') THEN 1 END )AS total_plásticos 
    , count ( CASE  WHEN (desc_material = 'ENVELOPE') THEN 1 END )AS total_envelopes , 
    count( CASE  WHEN (desc_material = 'FOLHETERIA') THEN 1 END )AS total_folheterias FROM view_verocard_estoque WHERE ativo=:ativo AND  cod_produto = :cod_produto ;");

        $statementDescMaterial->execute(['ativo' => $stockModel->getActive(), 'cod_produto' => $stockModel->getCodProduto()]);

        $response = $statementDescMaterial->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }


    public function FilterbyDescriptionProduto(StockModel $stockModel, string $desc_produto): array
    {

        $statement = $this->pdo
            ->prepare("SELECT desc_produto , 
        saldo_atual 
        , ativo 
        , cod_produto
        , desc_material 
        , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
        , qtd_entrada
        , media FROM view_verocard_estoque WHERE ativo=:ativo AND desc_produto ILIKE '%" . $desc_produto . "%'");

        $statement->execute(['ativo' => $stockModel->getActive()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function FilterbyDescriptionProdutoDesc_Material(StockModel $stockModel, string $desc_produto): array
    {

        $statementDescMaterial = $this->pdo
            ->prepare("SELECT 
    count( CASE  WHEN (desc_material = 'PLÁSTICO') THEN 1 END )AS total_plásticos 
    , count ( CASE  WHEN (desc_material = 'ENVELOPE') THEN 1 END )AS total_envelopes , 
    count( CASE  WHEN (desc_material = 'FOLHETERIA') THEN 1 END )AS total_folheterias FROM view_verocard_estoque WHERE ativo=:ativo AND desc_produto ILIKE '%" . $desc_produto . "%'");

        $statementDescMaterial->execute(['ativo' => $stockModel->getActive()]);

        $response = $statementDescMaterial->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }

    public function FilterbyActive(StockModel $stockModel): array
    {

        $statement = $this->pdo
            ->prepare("SELECT desc_produto , 
        saldo_atual 
        , ativo 
        , cod_produto
        , desc_material 
        , to_char(dt_entrada, 'DD/MM/YYYY') AS dt_entrada
        , qtd_entrada
        , media FROM view_verocard_estoque WHERE ativo=:ativo ");

        $statement->execute(['ativo' => $stockModel->getActive()]);

        $response = $statement->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }


    public function FilterbyActiveDesc_Material(StockModel $stockModel): array
    {

        $statementDescMaterial = $this->pdo
            ->prepare("SELECT 
        count( CASE  WHEN (desc_material = 'PLÁSTICO') THEN 1 END )AS total_plásticos 
        , count ( CASE  WHEN (desc_material = 'ENVELOPE') THEN 1 END )AS total_envelopes , 
        count( CASE  WHEN (desc_material = 'FOLHETERIA') THEN 1 END )AS total_folheterias FROM view_verocard_estoque WHERE ativo=:ativo ");

        $statementDescMaterial->execute(['ativo' => $stockModel->getActive()]);

        $response = $statementDescMaterial->fetchAll(\PDO::FETCH_ASSOC);

        return $response;
    }
}
