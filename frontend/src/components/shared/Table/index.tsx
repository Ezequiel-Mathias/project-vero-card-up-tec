import React from "react";
import DataTable from "react-data-table-component";

interface ITable {
    data: Array<Object>
    column: Array<Object>
    titleTable?: string
    typeMessage : boolean
}

const Table: React.FC<ITable> = ({ data, column , titleTable , typeMessage}) => {

    return (
        <div className="container-table">
            <h2>{titleTable}</h2>
            <DataTable
                columns={column}
                data={data}
                striped={true}
                responsive={true}
                noDataComponent={typeMessage ? 'Erro ao carregar os dados...' :  'Nada a trazer...'}
                fixedHeader={true}
                pagination={true}
            />
        </div>
    )
}

export default Table
