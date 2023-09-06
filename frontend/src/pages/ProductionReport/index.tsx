import React, { useEffect, useState , useRef } from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Select from "../../components/shared/Select";
import api from "../../connectionAPI";
import Table from "../../components/shared/Table";
import {useDownloadExcel} from "react-export-table-to-excel";
import Swal from "sweetalert2";

const PageProductionReport: React.FC = () => {

    const [ProductionReportData, setProductionReportData] = useState([]);

    const [ProductionReportMessage, setProductionReportMessage] = useState(false);

    const [formValues, setFormValues] = useState({

        fileName: "",
        
        InitialProcessingDate: "",

        FinalProcessingDate: "",

        InitialShippingDate: "",

        FinalShippingDate: "",

        cardType: ""

    });

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const columnsProductionReport: Array<Object> = [
        {
            name: 'Código do produto',
            selector: (row: any) => row.cod_produto,
            sortable: true
        },
        {
            name: 'Descrição do produto',
            selector: (row: any) => row.desc_produto
        },
        {
            name: 'Data de processamento',
            selector: (row: any) => row.dt_processamento
        },
        {
            name: 'Data de expedição',
            selector: (row: any) => row.dt_expedicao
        },
        {
            name: 'Total de cartões',
            selector: (row: any) => row.total_cartoes
        },
        {
            name: 'Status',
            selector: (row: any) => row.status
        },
        {
            name: 'Rastreio',
            selector: (row: any) => row.rastreio  
        },
    ];



    const ProductionReportRequests = async () => {

        if (formValues.cardType === 'Tarja' || formValues.cardType === 'Chip') {

            if (formValues.InitialProcessingDate < formValues.FinalProcessingDate
                || formValues.InitialShippingDate < formValues.FinalShippingDate
                || formValues.fileName) {
                await api.post('/production-report', {
                    arquivo: formValues.fileName,
                    tipo: formValues.cardType,
                    dataInicial: formValues.InitialProcessingDate,
                    dataFinal: formValues.FinalProcessingDate,
                    expedicaoInicial: formValues.InitialShippingDate,
                    expedicaoFinal: formValues.FinalShippingDate
                }).then((data) => {

                    setProductionReportData(data.data)

                }).catch(() => {

                    setProductionReportMessage(true)
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Datas incorretas...',
                    text: 'A data inicial não pode ser maior que a final.',
                });
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Selecione um tipo de cartão...',
                text: 'Selecione tarja ou chip antes de fazer a filtragem dos dados.',
            });
        }

    }


    const refExcel : any = useRef();

    const {onDownload} = useDownloadExcel({
        currentTableRef: refExcel.current,
        filename: "Web Users",
        sheet:"Web Users"
    })


    return (
        <>
            <DefaultHeader sessionTheme="Relatorio de produção" />

            <div className="container-production-report">
                <div className="container-inputs">

                    <div className="inputs">

                        <Input name="fileName" placeholder='Arquivo...' info="Arquivo:" onChange={handleChange} />

                        <Select info={"Selecione o tipo de cartão:"} name="cardType" onChange={handleChange}>

                            <option selected>Selecione um tipo...</option>

                            <option value="Tarja">Tarja</option>

                            <option value="Chip">Chip</option>

                        </Select>

                    </div>

                    <div className="inputs">
                        <Input type="date" name="InitialProcessingDate" info="Data de processamento inicial:" onChange={handleChange} />
                        <Input type="date" name="FinalProcessingDate" info="Data de processamento final:" onChange={handleChange} />
                    </div>

                    <div className="inputs">
                        <Input type="date" name="InitialShippingDate" info="Data de expedição inicial:" onChange={handleChange} />
                        <Input type="date" name="FinalShippingDate" info="Data de expedição final:" onChange={handleChange} />
                    </div>

                </div>


                {
                    Array.isArray(ProductionReportData) && ProductionReportData.length >= 1 &&

                    < Table
                        column={columnsProductionReport}
                        data={ProductionReportData}
                        typeMessage={ProductionReportMessage}
                        refExcel={refExcel}
                    />
                    
                }

                <DownloadFacilitators textButton="Pesquisar"  excelClick={() => onDownload()} onClickButton={() => ProductionReportRequests()} printClick={() => window.print()} />

            </div>

        </>
    )
}

export default PageProductionReport;