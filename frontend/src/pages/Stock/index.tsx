import React, { useEffect, useState } from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Select from "../../components/shared/Select";
import api from "../../connectionAPI";
import Table from "../../components/shared/Table";
import Swal from "sweetalert2";


const PageStock: React.FC = () => {

    const [stockData, setStockData] = useState([]);

    const [formValues, setFormValues] = useState({

        fileName: "",
        product: "",
        productCode: "",
        activeType: ""

    });

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }



    const ProductionReportRequests = async () => {

        if (formValues.activeType === 'Sim' || formValues.activeType === 'Não') {

            await api.post('/stock', {
                ativo: formValues.activeType,
                desc_produto: formValues.product,
                cod_produto: formValues.productCode,
            }).then((data) => {
    
                setStockData(data.data)
    
            }).catch(() => {
    
            });

        }else{

            Swal.fire({
                icon: 'error',
                title: 'Selecione um ativo...',
                text: 'Selecione um tipo de ativo antes de fazer a filtragem',
            });

        }
        
        



    }

    const columnsStock: Array<Object> = [
        {
            name: 'Descrição do produto',
            selector: (row: any) => row.desc_produto,
            sortable: true
        },
        {
            name: 'Saldo atual',
            selector: (row: any) => row.saldo_atual
        },
        {
            name: 'Ativo',
            selector: (row: any) => row.ativo
        },
        {
            name: 'Código do produto',
            selector: (row: any) => row.cod_produto
        },
        {
            name: 'Descrição material',
            selector: (row: any) => row.desc_material
        },
        {
            name: 'Data de entrada',
            selector: (row: any) => row.dt_entrada
        },
        {
            name: 'Quantidade entrada',
            selector: (row: any) => row.qtd_entrada
        },
        {
            name: 'Média',
            selector: (row: any) => row.media
        }
    ];



    return (
        <>
            <DefaultHeader sessionTheme="Estoque" />
            <div className="container-stock">

                <Select info={"Selecione um tipo de ativo:"} name="activeType" onChange={handleChange}>
                    <option selected>Selecione um ativo...</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </Select>

                <div className="inputs-info-products">
                    <Input name="product" info="Descrição do produto:" placeholder="Produto..." onChange={handleChange} />
                    <Input name="productCode" info="Código do produto:" placeholder="Código produto..." onChange={handleChange} />
                </div>

                {
                    stockData.length >= 1 &&
                    <Table
                        data={stockData}
                        column={columnsStock}
                    />
                }

                <DownloadFacilitators onClickSearch={() => ProductionReportRequests()} />

            </div>

        </>
    )

}

export default PageStock;