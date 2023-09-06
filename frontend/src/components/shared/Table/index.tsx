import React, { useRef } from "react";

import DataTable from "react-data-table-component";



interface ITable {
    data: Array<Object>
    column: Array<Object>
    titleTable?: string
    typeMessage?: boolean
    refExcel?: any
}

const Table: React.FC<ITable> = ({ data, column, titleTable, typeMessage, refExcel }) => {


    return (

        <>
            
            <div className="container-table" ref={refExcel}>

                <h2>{titleTable}</h2>

                <DataTable
                    columns={column}
                    data={data}
                    striped={true}
                    responsive={true}
                    noDataComponent={typeMessage ? 'Erro ao carregar os dados...' : 'Nada a trazer...'}
                    fixedHeader={true}
                    pagination={true}

                />

            </div>


        </>


    )
}

export default Table
