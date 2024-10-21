import React, { useState, useRef } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import { Createuser } from '../api/createuser.api';
import { useNavigate } from 'react-router-dom';



export function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toast = useRef(null);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const navigate = useNavigate();
    const header = <div className="font-bold mb-3">Pick a password</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );


    const handleRegister = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        // Prepara los datos para el registro
        const data = {
            email: email,
            password: password,
            first_name: firstName,  
            last_name: lastName,  
        };

        // Verifica si todos los campos están llenos
        if (firstName && lastName && email && password && confirmPassword) {
            // Verifica si las contraseñas coinciden
            if (password !== confirmPassword) {
                toast.current.show({ 
                    severity: 'error', 
                    summary: 'Registro Fallido', 
                    detail: 'Las contraseñas no coinciden.', 
                    life: 3000 
                });
                return;
            }
    
            
    
            try {
                // Intenta crear el usuario
                const response = await Createuser(data);
                if (response) {  // Agregamos los paréntesis aquí
                    toast.current.show({ 
                        severity: 'info',
                        summary: 'Success',
                        detail: '¡Bienvenido!', 
                        life: 3000 
                    });
                }
                
                setTimeout(() => {
                    navigate('/'); // Redirige a la página principal después de que se cierra el toast
                }, 3000); // Coincide con el tiempo de vida del toast
                
            } catch (error) {
                console.log(error.response.data);
                if (error.response && error.response.data) {
                    // Si hay errores en el servidor, los muestra
                    const errorMessages = error.response.data;
                    const message = errorMessages.email ? errorMessages.email[0] : 'Error al registrar, inténtalo de nuevo.';
                    
                    toast.current.show({ 
                        severity: 'error', 
                        summary: 'Error', 
                        detail: message, 
                        life: 3000 
                    });
                } else {
                    // Error genérico si no se recibe una respuesta del servidor
                    toast.current.show({ 
                        severity: 'error', 
                        summary: 'Error', 
                        detail: 'Ocurrió un error inesperado.', 
                        life: 3000 
                    });
                }
            }
        } else {
            // Si algún campo está vacío
            
            toast.current.show({ 
                severity: 'success', 
                summary: 'Registro Fallido', 
                detail: 'Por favor, completa todos los campos.', 
                life: 3000 
            });
        }
    };
    
    

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const cardHeight = windowWidth < 768 ? '560px' : '480px';

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ maxWidth: '800px', height: cardHeight }} >
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Register</h1>
                <Toast ref={toast} />
                <form onSubmit={handleRegister}>

                    <div className="flex flex-column md:flex-row gap-5" style={{ marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
                        <FloatLabel style={{ width: '100%' }}>
                            <InputText 
                                id="first-name"  
                                className="p-inputtext-lg"  
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                style={{ width: '100%' }} 
                            />
                            <label htmlFor="first-name">First Name</label>  
                        </FloatLabel>

                        <FloatLabel style={{ width: '100%' }}>
                            <InputText 
                                id="last-name"  
                                className="p-inputtext-lg"  
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                style={{ width: '100%' }} 
                            />
                            <label htmlFor="last-name">Last Name</label>  
                        </FloatLabel>
                    </div>

                    <div className="p-fluid" style={{ marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
                        <FloatLabel style={{ width: '100%' }}>
                            <InputText 
                                id="email"  
                                className="p-inputtext-lg"  
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                style={{ width: '100%' }} 
                                keyfilter="email"
                            />
                            <label htmlFor="email">Email</label>  
                        </FloatLabel>
                    </div>

                    <div className="flex flex-column md:flex-row gap-5" style={{ marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
                        <FloatLabel style={{ width: '100%' }}>
                            <Password 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                toggleMask 
                                className="p-inputtext-lg" 
                                header={header} 
                                footer={footer}
                            />
                            <label htmlFor="password">Password</label> 
                        </FloatLabel>

                        <FloatLabel style={{ width: '100%' }}>
                            <Password 
                                id="confirm-password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                toggleMask 
                                feedback={false} 
                                className="p-inputtext-lg" 
                            />
                            <label htmlFor="confirm-password">Confirm Password</label> 
                        </FloatLabel>
                    </div>

                    <Button severity="danger" label="Sign Up" icon="pi pi-sign-in" type="submit" style={{ marginTop: '1rem', marginBottom: '2rem', width: '100%' }} />
                </form>

                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
                    <span>Already have an account?</span>
                    <Link 
                        to="/" 
                        className="text-red-700 hover:underline dark:text-red-500 ml-2"
                    >
                        Sign in
                    </Link>
                </div>
            </Card>
        </div>
    );
}




