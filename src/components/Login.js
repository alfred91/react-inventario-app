import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function Login({ onLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Función manejadora del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto
        setError('');
        try {
            // Realiza una petición POST de autenticación
            const response = await axios.post(`${API_URL}/api/auth/token`, {
                email,
                password,
            }, {
                headers: { 'Accept': 'application/json' }
            });
            // Llama a la función onLogin con el token
            onLogin(response.data.token);
        } catch (error) {
            console.error('Error de autenticación', error);
            setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    };

    // Renderiza el Login 
    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>

                {error && (
                    <p className="mb-4 text-sm text-red-600">{error}</p>
                )}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Iniciar sesión</button>
            </form>
        </div>
    );
}

// Exporta el componente
export default Login;