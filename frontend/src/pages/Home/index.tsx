import React, { useEffect, useState } from "react";
import api from "../../connectionAPI";
import NavBarClient from "../../components/layout/NavBarClient";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';


const PageHome: React.FC = () => {

    const [datas, setData] = useState([]);


    const columns: Array<Object> = [
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

    useEffect(() => {

        api.get('/production')
            .then((data) => {
                setData(data.data)
            }).catch((error) => {

            });



    }, [])

    let data_americana = "2023-07-21 08:15:03.149:03";
    let data_brasileira = data_americana.split('-').reverse().join('/');


    console.log(data_brasileira)

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

            {/* <Table data={datas}/> */}

            <div className="teste">
                <h2>Em produção</h2>
                <div className="container-teste">
                    <DataTable
                        columns={columns}
                        data={datas}
                        striped={true}
                        responsive={true}

                        noDataComponent='Nenhum arquivo encontrado'
                        fixedHeader
                        pagination
                    />
                </div>


            </div>


        </div >
    )
}

export default PageHome;