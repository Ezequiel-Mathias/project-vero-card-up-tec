import React from "react";

interface ITable {
    data?: any
}

const Table: React.FC<ITable> = ({ data }) => {
    return (
        <div className="container-table">

            <div className="table">

                <div className="title-table">
                    <h3>Em Produção</h3>
                </div>

                <div className="container-column-table">

                    <div className="title-column">
                        <span>Nome do arquivo</span>
                        <span>Número op</span>
                        <span>Data</span>
                        <span>Qtd Objs</span>
                    </div>



                    <div className="container-rows-table">

                        {data &&
                            data.map((data: any) => (
                                <div className="rows-table">
                                    <span>{data.nome_arquivo}</span>
                                    <span>{data.id_op}</span>
                                    <span>28/02/2023</span>
                                    <span>9000</span>
                                </div>




                            ))}


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Table