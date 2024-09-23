import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { blue } from '@mui/material/colors';

export function Login() {
    return (
        <>  
            <Navbar />
            <Container 
                maxWidth="sm" // Cambia esto según tus necesidades (sm, md, lg, xl)
                disableGutters // Desactiva los márgenes laterales
                sx={{ marginTop: 2, paddingBottom: 2 ,bgcolor:blue}} // Margen superior y relleno inferior
                
            >
                dsafgsad
            </Container>
        </>
    );
}
