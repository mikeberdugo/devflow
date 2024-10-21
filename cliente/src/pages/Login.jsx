import React, { useState, useRef } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';
import { Link } from 'react-router-dom';
import { Validationuser } from '../api/login.api';

export function Login() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useRef(null); // Cambiar a useRef

    const handleLogin = async ( ) => {
        e.preventDefault();
        if (email && password) {
            const data = {
                email: email ,
                password: password ,
            };

            try {
                // Intenta iniciar sesión
                const response = await Validationuser(data);
                if (response) {
                    toast.current.show({ severity: 'success', summary: 'Login Successful', detail: 'Welcome!', life: 3000 });
                }
            } catch (error) {
                console.log(error)
                if (error.response && error.response.data) {
                    const errorMessages = error.response.data;
                    const message = errorMessages.non_field_errors ? errorMessages.non_field_errors[0] : 'Error al iniciar sesión, inténtalo de nuevo.';
                    toast.current.show({ 
                        severity: 'error', 
                        summary: 'Login Failed', 
                        detail: message, 
                        life: 3000 
                    });
                } else {
                    toast.current.show({ 
                        severity: 'error', 
                        summary: 'Error', 
                        detail: 'Ocurrió un error inesperado.', 
                        life: 3000 
                    });
                }
            }

            
        } else {
            toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Please enter valid credentials', life: 3000 });
        }
    };

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: '400px', height: '400px' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Login</h1>
                <Toast ref={toast} /> {/* Agregar el componente Toast aquí */}
                <form onSubmit={handleLogin}>
                    <div className="p-fluid" style={{ marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
                        <FloatLabel style={{ width: '100%' }}>
                            <InputText 
                                id="email"  
                                className="p-inputtext-lg"  
                                value={email} 
                                onChange={(e) => setemail(e.target.value)} 
                                style={{ width: '100%' }} 
                                keyfilter="email"
                            />
                            <label htmlFor="email">Email</label>  
                        </FloatLabel>
                    </div>

                    <div className="p-fluid" style={{ marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
                        <FloatLabel style={{ width: '100%' }}>
                            <Password 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                feedback={false} 
                                toggleMask 
                                className="p-inputtext-lg" 
                            />
                            <label htmlFor="password">Password</label> 
                        </FloatLabel>
                    </div>

                    <div className="p-fluid">
                        
                    </div>
                    <Button severity="danger" label="Sign Up" icon="pi pi-sign-in" type="submit" style={{ marginTop: '1rem', marginBottom: '2rem', width: '100%' }} />
                </form>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
                    <span>Not registered?</span>
                    <Link 
                        to="/Create/user" 
                        className="text-red-700 hover:underline dark:text-red-500 ml-2"
                    >
                        Create an account
                    </Link>
                </div>
            </Card>
        </div>
    );
}
