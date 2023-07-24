import React from "react";
import DataTable from "react-data-table-component";

interface ITable {
    data: Array<Object>
    column: Array<Object>
    titleTable: string
    typeMessage : boolean
}

const Table: React.FC<ITable> = ({ data, column , titleTable}) => {

    return (
        <div className="container-table">
            <h2>{titleTable}</h2>
            <DataTable
                columns={column}
                data={data}
                striped={true}
                responsive={true}
                noDataComponent='Nenhum arquivo encontrado'
                fixedHeader={true}
                pagination={true}
            />
        </div>
    )
}

export default Table
