import React, { useRef } from 'react'; 
import Navbar from '../Navbar/Navbar';
import { Toast } from 'primereact/toast';
import { ScrollTop } from 'primereact/scrolltop';
export function Base({ children }) { // Cambia Children a children
    const toast = useRef(null); // Usar useRef en lugar de createRef

    return (
        <div className="login-container" style={{ height: '100vh', margin: 0 }}>
            <Navbar />
            <Toast ref={toast} />
            <div style={{ padding: '2em' }}>
                {children} {/* Renderiza el contenido pasado como children */}
            </div>
            <ScrollTop />
        </div>
    );
}
