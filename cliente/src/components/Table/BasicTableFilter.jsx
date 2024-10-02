import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const BasicTableFilter = ({ data, columns, rows = 6, emptyMessage = "No data found." }) => {
    const [globalFilter, setGlobalFilter] = useState('');

    const handleFilterChange = (e) => {
        setGlobalFilter(e.target.value);
    };

    const header = (
        <div className="flex justify-content-start">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText
                    className='flex justify-content-end'
                    type="search"
                    value={globalFilter}
                    onChange={handleFilterChange}
                    placeholder="Search..."
                    aria-label="Global Search"
                />
            </IconField>
        </div>
    );

    return (
        <div className="card">
            <DataTable
                value={data}
                paginator
                rows={rows}
                globalFilter={globalFilter}
                header={header}
                emptyMessage={emptyMessage}
                removableSort
            >
                {columns.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} sortable={col.sortable} />
                ))}
            </DataTable>
        </div>
    );
};

export default BasicTableFilter;
