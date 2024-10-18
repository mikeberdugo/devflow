import React, { useState, useRef } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useRef(null); // Cambiar a useRef

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            toast.current.show({ severity: 'success', summary: 'Login Successful', detail: 'Welcome!', life: 3000 });
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
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                style={{ width: '100%' }} 
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
                    <Button className="p-inputtext-lg" label="Sign Up" icon="pi pi-sign-in" type="submit" style={{ marginTop: '1rem', marginBottom: '2rem', width: '100%' }} />
                </form>
            </Card>
        </div>
    );
}
