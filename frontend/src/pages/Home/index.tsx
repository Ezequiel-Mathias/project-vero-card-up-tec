import React, { useEffect, useState } from "react";
import api from "../../connectionAPI";
import Table from "../../components/shared/Table";
import DefaultHeader from "../../components/layout/DefaultHeader";


const PageHome: React.FC = () => {

    const [inProductionData, setInProductionData] = useState([]);
    const [awaitingReleaseData, setAwaitingRelease] = useState([]);
    const [typeMessageInProduction, setTypeMessageInProduction] = useState(false);
    const [typeMessageAwaitingRelease, setTypeMessageAwaitingRelease] = useState(false);

    const columnsInProduction: Array<Object> = [
        {
            name: 'Id op',
            selector: (row: any) => row.id_op,
            sortable: true
        },
        {
            name: 'Nome do arquivo',
            selector: (row: any) => row.nome_arquivo,

        },
        {
            name: 'Número de lote',
            selector: (row: any) => row.nr_lote,


        },
        {
            name: 'Tipo',
            selector: (row: any) => row.tipo

        },
        {
            name: 'Data op',
            selector: (row: any) => row.dt_op

        },
        {
            name: 'Quantidade de cartões',
            selector: (row: any) => row.qtd_objs,
            sortable: true
        },
    ];
    
    const columnsAwaitingRelease: Array<Object> = [
        {
            name: 'Ordem de produção',
            selector: (row: any) => row.id_ordem_producao_status,
            sortable: true
        },
        {
            name: 'Id op',
            selector: (row: any) => row.id_op

        },
        {
            name: 'Data de entrada',
            selector: (row: any) => row.dt_status
        },
        {
            name: 'Data de liberação',
            selector: (row: any) => row.dt_finalizado
        }
    ];

    useEffect(() => {

        const HomePageRequests = async () => {

            await api.get('/production')
                .then((data) => {
                    setInProductionData(data.data)
                }).catch(() => {
                    setTypeMessageInProduction(true)
                });

            await api.get('/awaiting-release')
                .then((data) => {                          
                    setAwaitingRelease(data.data)
                }).catch(() => {
                    setTypeMessageAwaitingRelease(true)
                });
        }

       HomePageRequests()

    }, []);

    return (
        <div className="container-page-home">

            <DefaultHeader />

            <Table
                data={Array.isArray(inProductionData)  ? inProductionData : [] }
                column={columnsInProduction}
                titleTable="Em produção"
                typeMessage={typeMessageInProduction}
            />

            <Table
                data={Array.isArray(awaitingReleaseData) ? awaitingReleaseData : []}
                column={columnsAwaitingRelease}
                titleTable="Aguardando liberação"
                typeMessage={typeMessageAwaitingRelease}
            />
        </div >
    )
}

export default PageHome;