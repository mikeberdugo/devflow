import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import BasicButton from '../Button/BasicButton';

const BasicModal = ({ header, content, footerContent, visible, setVisible, showModalLabel = "Show"}) => {
    return (
        <div className="">
            <BasicButton 
                label={showModalLabel} 
                icon="pi pi-external-link"  
                onClick={() => setVisible(true)}  // Llamar setVisible directamente desde props
                className="p-button-danger" // Cambia el estilo, ej: "p-button-danger"
            />
            <Dialog header={header} visible={visible} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}  onHide={() => setVisible(false)} footer={footerContent}>
                <div className="m-0">
                    {content}
                </div>
            </Dialog>
        </div>
    );
};

export default BasicModal;
