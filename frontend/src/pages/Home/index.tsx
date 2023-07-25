import React, { useEffect, useState } from "react";
import api from "../../connectionAPI";
import NavBarClient from "../../components/layout/NavBarClient";
import { Link } from "react-router-dom";

import Table from "../../components/shared/Table";


const PageHome: React.FC = () => {

    const [inProductionData, setInProductionData] = useState([]);
    const [awaitingReleaseData, setAwaitingRelease] = useState([]);
    const [typeMessageInProduction , setTypeMessageInProduction] = useState(false);
    const [typeMessageAwaitingRelease , setTypeMessageAwaitingRelease] = useState(false);

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

        api.get('/production')
            .then((data) => {
                setInProductionData(data.data)
            }).catch((error) => {

            });

        api.get('/awaiting-release')
            .then((data) => {
                setAwaitingRelease(data.data)
            }).catch((error) => {

            });

    }, [])

    //EXEMPLOSSS


    const columns = [
        {
            name: 'Title',
            selector: (row : any) => row.title,
        },
        {
            name: 'Year',
            selector: (row : any) => row.year,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]


    return (
        <div className="container-page-home">

            <NavBarClient titles={
                [<Link to={`${process.env.PUBLIC_URL}/home`}>Home</Link>,
                <Link to={`${process.env.PUBLIC_URL}/relatorio-producao`}>Relatorio de Produção</Link>,
                <Link to={`${process.env.PUBLIC_URL}/estoque`}>Estoque</Link>,
                <Link to={`${process.env.PUBLIC_URL}/usuarios`}>Admin Users</Link>,
                <Link to={`${process.env.PUBLIC_URL}/emitidos`}>Cartões Emitidos</Link>]
            } />

            <div className="image-logo-up">
                <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/LogoUP.svg?alt=media&token=a4d9e086-9cc7-4d6d-846d-875f2858b698' alt="Logo up" />
            </div>

            <Table
                data={inProductionData}
                column={columnsInProduction}
                titleTable="Em produção"
                typeMessage={typeMessageInProduction}
            />

             <Table
                data={awaitingReleaseData}
                column={columnsAwaitingRelease}
                titleTable="Aguardando liberação"
                typeMessage={typeMessageAwaitingRelease}
            /> 
        </div >
    )
}

export default PageHome;