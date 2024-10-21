import React, { useState, useEffect } from 'react';
import { ProductService } from './service/ProductService';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { ProgressBar } from 'primereact/progressbar';
import { Rating } from 'primereact/rating';
import { Base } from '../components/Base/Base';

export  function Roles() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');

    const valueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    useEffect(() => {
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data.slice(0, 50)));
    }, []);

    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name} <ProgressBar value={50}></ProgressBar> </div>
                            <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag "></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                            <div className="flex align-items-center gap-3">
                                <p className='p-paragraph'> 
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum culpa ipsa nam molestiae minus modi iure? Nemo debitis asperiores rerum animi porro fugiat eos, deserunt cumque possimus, vero, et architecto!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae necessitatibus quo ipsum enim nisi veniam consequatur laboriosam excepturi, nulla, quaerat, molestias consequuntur nemo sed reiciendis eveniet voluptates culpa architecto.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident labore explicabo ipsum voluptatibus iusto dolorum beatae officia nihil! Ea, temporibus at quasi harum dolorem numquam fugit rem iste corporis?
                                </p>
                                
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Button icon="pi pi-file-edit"  style={{ color: 'slateblue' }} tooltip="Edit Project" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}  className="p-button-rounded" ></Button>{/*  disabled={product.inventoryStatus === 'OUTOFSTOCK'} */}
                            <Button icon="pi pi-cog"  style={{ color: 'slateblue' }} tooltip="Configure Project" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}  className="p-button-rounded" ></Button>{/*  disabled={product.inventoryStatus === 'OUTOFSTOCK'} */}
                            <Button icon="pi pi-eye"  style={{ color: 'slateblue' }} tooltip="View Project" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}  className="p-button-rounded" ></Button>{/*  disabled={product.inventoryStatus === 'OUTOFSTOCK'} */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <div className="text-2xl font-bold">{product.name} <ProgressBar value={56}></ProgressBar> </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <Button icon="pi pi-file-edit"  style={{ color: 'slateblue' }} tooltip="Edit Project" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}  className="p-button-rounded" ></Button>{/*  disabled={product.inventoryStatus === 'OUTOFSTOCK'} */}
                        <Button icon="pi pi-cog"  style={{ color: 'slateblue' }} tooltip="Configure Project" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}  className="p-button-rounded" ></Button>{/*  disabled={product.inventoryStatus === 'OUTOFSTOCK'} */}
                        <Button icon="pi pi-eye"  style={{ color: 'slateblue' }} tooltip="View Project" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}  className="p-button-rounded" ></Button>{/*  disabled={product.inventoryStatus === 'OUTOFSTOCK'} */}
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product, index);
        else if (layout === 'grid') return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <Base>
            <div className="card">
                <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
            </div>
        </Base>
        
    )
}
        