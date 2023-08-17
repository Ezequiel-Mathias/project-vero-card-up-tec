<?php

namespace App\Models;

final class ProductionReportModel
{
    /**
     * @var string
     */
    private $file;

     /**
     * @var string
     */
    private $cardType;
    /**
     * @var string
     */
    private $initialProcessinDate;
    /**
     * @var string
     */
    private $finalProcessinDate;
    /**
     * @var string
     */
    private $initialshippingdate;
    /**
     * @var string
     */
    private $finalshippingdate;



    public function getFile(): string
    {
        return $this -> file;
    }

    public function setFile(string $file): ProductionReportModel
    {

        $this -> file = $file;

        return $this;
    }

    public function getCardType(): string
    {
        return $this -> cardType;
    }

    public function setCardType(string $cardType): ProductionReportModel
    {

        $this -> cardType = $cardType;

        return $this;
    }

    public function getInitialProcessinDate(): string
    {
        return $this -> initialProcessinDate;
    }

    public function setInitialProcessinDate(string $initialProcessinDate): ProductionReportModel
    {

        $this-> initialProcessinDate = $initialProcessinDate;

        return $this;
    }

    public function getFinalProcessinDate(): string
    {
        return $this -> finalProcessinDate;
    }

    public function setFinalProcessinDate(string $finalProcessinDate): ProductionReportModel
    {

        $this-> finalProcessinDate = $finalProcessinDate;

        return $this;
    }

    public function getInitialShippingdate(): string
    {
        return $this -> initialshippingdate;
    }

    public function setInitialShippingdate(string $initialshippingdate): ProductionReportModel
    {

        $this-> initialshippingdate = $initialshippingdate;

        return $this;
    }

    public function getFinalShippingdate(): string
    {
        return $this -> finalshippingdate;
    }

    public function setFinalShippingdate(string $finalshippingdate): ProductionReportModel
    {
        $this-> finalshippingdate = $finalshippingdate;

        return $this;
    }

    
}
