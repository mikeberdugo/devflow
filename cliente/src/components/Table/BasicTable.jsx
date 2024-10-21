import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const BasicTable = ({ data, columns, rows = 2, emptyMessage = "No data found." }) => {
    return (
        <DataTable
            tableStyle={{ minWidth: '50rem' }}
            value={data}
            paginator
            rows={rows}
            emptyMessage={emptyMessage}
            removableSort
        >
            {columns.map((col, index) => (
                <Column key={index} field={col.field} header={col.header} sortable={col.sortable} />
            ))}
        </DataTable>
    );
};

export default BasicTable;
