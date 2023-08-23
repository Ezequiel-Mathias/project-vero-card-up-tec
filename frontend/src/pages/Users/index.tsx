import React from "react";
import NavBarClient from "../../components/layout/NavBarClient";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import Table from "../../components/shared/Table";


const PageUsers: React.FC = () => {

    const columnsInProduction: Array<Object> = [
        {
            name: 'Id',
            selector: (row: any) => row.id_op,
            sortable: true
        },
        {
            name: 'Nome de usuário',
            selector: (row: any) => row.nome_arquivo,

        },
        {
            name: 'Senha',
            selector: (row: any) => row.nr_lote,


        },
        {
            name: 'Email',
            selector: (row: any) => row.tipo

        },
        {
            name: 'Nome completo',
            selector: (row: any) => row.dt_op

        },
        {
            name: 'Criar',
            selector: (row: any) => row.qtd_objs,
           
        },
        {
            name: 'Editar',
            selector: (row: any) => row.qtd_objs,
            
        },
        
        {
            name: 'Deletar',
            selector: (row: any) => row.qtd_objs,
            
        },
    ];

    return (

        <div className="container-page-users">

            <DefaultHeader sessionTheme="Admin users" />

            <div className="container-input-search">

                <Input info="Pesquisar:" icon="search" />
                
            </div>

        </div>

    )
}

export default PageUsers