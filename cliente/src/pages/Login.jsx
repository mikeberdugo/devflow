import React, { useState } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = React.createRef();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
        if (username && password) {
            toast.current.show({ severity: 'success', summary: 'Login Successful', detail: 'Welcome!', life: 3000 });
        } else {
            toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Please enter valid credentials', life: 3000 });
        }
    };

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Login" style={{ width: '300px', backgroundColor: '#f5f5f5' }}>
                <form onSubmit={handleLogin}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <FloatLabel style={{ flex: 1 }}>
                            <InputText 
                                id="username"  
                                className="p-inputtext-lg"  
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                            <label htmlFor="username">Username</label>
                        </FloatLabel>
                    </div>

                    <FloatLabel>
                        <Password 
                            id="password" 
                            value={password} 
                            className="p-inputtext-lg" 
                            onChange={(e) => setPassword(e.target.value)} 
                            feedback={false} 
                            toggleMask 
                        />
                        <label htmlFor="password">Password</label>
                    </FloatLabel>
                    
                    <Button className="p-inputtext-lg"  label="Login" icon="pi pi-sign-in " type="submit" style={{ marginTop: '1rem' }} />
                </form>
            </Card>
        </div>
    );
}
