import React, { useEffect, useRef, useState } from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Select from "../../components/shared/Select";
import api from "../../connectionAPI";
import Table from "../../components/shared/Table";
import Swal from "sweetalert2";
import { useDownloadExcel } from "react-export-table-to-excel";


const PageStock: React.FC = () => {

    const [stockData, setStockData] = useState([]);
    const [quantityofMaterialsData, setQuantityofmaterialsData] = useState<any>({});

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

                setStockData(data.data[0])
                setQuantityofmaterialsData(data.data[1]);
            }).catch(() => {

            });

        } else {

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


   

    const refExcel: any = useRef();

    const { onDownload } = useDownloadExcel({
        currentTableRef: refExcel.current,
        filename: "Estoque",
        sheet: "Estoque"
    })


    console.log(quantityofMaterialsData.total_envelopes)
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
                     quantityofMaterialsData.length >= 1 &&

                    <div className="container-quantity-of-materials">
                        <p>Total de materiais por pesquisa:</p>

                        <div className="quantity-of-materials">

                            <div className="quantity">
                                <span>Plásticos</span>
                                <span>{quantityofMaterialsData[0].total_plásticos}</span>
                            </div>

                            <div className="quantity">
                                <span>Envelopes</span>
                                <span>{quantityofMaterialsData[0].total_envelopes}</span>
                            </div>

                            <div className="quantity">
                                <span>Folheterias</span>
                                <span>{quantityofMaterialsData[0].total_folheterias}</span>
                            </div>

                        </div>
                    </div>


                }


                {
                    Array.isArray(stockData) && stockData.length >= 1 &&
                    <Table
                        data={stockData}
                        column={columnsStock}
                    />
                }

                <div className="table-container-dowload">

                    <div className="scroll-table-dowload">
                        <table ref={refExcel}>

                            <tbody>

                                <tr>
                                    <td>Descrição do produto</td>
                                    <td>Saldo atual</td>
                                    <td>Ativo</td>
                                    <td>Código do produto</td>
                                    <td>Descrição material</td>
                                    <td>Data de entrada</td>
                                    <td>Quantidade entrada</td>
                                    <td>Média</td>
                                </tr>


                                {
                                    stockData.map((data: any) =>
                                        <tr key={data.id}>
                                            <td>{data.desc_produto}</td>
                                            <td>{data.saldo_atual}</td>
                                            <td>{data.ativo}</td>
                                            <td>{data.cod_produto}</td>
                                            <td>{data.desc_material}</td>
                                            <td>{data.dt_entrada}</td>
                                            <td>{data.qtd_entrada}</td>
                                            <td>{data.media}</td>
                                        </tr>
                                    )
                                }



                            </tbody>

                        </table>

                    </div>

                </div>

                <DownloadFacilitators excelClick={() => onDownload()} printClick={() => window.print()} textButton={'Pesquisar'} onClickButton={() => ProductionReportRequests()} csvData={stockData} />

            </div>

        </>
    )

}

export default PageStock;