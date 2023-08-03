<?php

namespace App\Models;

final class ProductionReportModel
{
    /**
     * @var string
     */
    private $active;
    /**
     * @var string
     */
    private $desc_produto;
    /**
     * @var string
     */
    private $cod_produto;



    public function getActive(): string
    {
        return $this -> active;
    }

    public function setActive(string $active): ProductionReportModel
    {

        $this -> active = $active;

        return $this;
    }

    public function getDescProduto(): string
    {
        return $this -> desc_produto;
    }

    public function setDescProduto(string $desc_produto): ProductionReportModel
    {

        $this-> desc_produto = $desc_produto;

        return $this;
    }

    public function getCodProduto(): string
    {
        return $this -> cod_produto;
    }

    public function setCodProduto(string $cod_produto): ProductionReportModel
    {

        $this-> cod_produto = $cod_produto;

        return $this;
    }

    
}
