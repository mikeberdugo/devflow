import React, { useRef } from 'react'; 
import Navbar from '../Navbar/Navbar';
import { Toast } from 'primereact/toast';

export function Base({ children }) { // Cambia Children a children
    const toast = useRef(null); // Usar useRef en lugar de createRef

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar login si es necesario
    };

    return (
        <div className="login-container" style={{ height: '100vh', margin: 0 }}>
            <Navbar />
            <Toast ref={toast} />
            <div style={{ padding: '2em' }}>
                {children} {/* Renderiza el contenido pasado como children */}
            </div>
        </div>
    );
}
