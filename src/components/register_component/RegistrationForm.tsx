import React, { useState } from 'react';
import Input from "../shared_components/input_component/input"; // Assuming this is correctly defined elsewhere
import Button from "../shared_components/button_component/button"; // Importing the Button component

interface RegisterFormProps {
    onRegister?: (username: string, email: string, password: string) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // Initialize error state

    /*const validateEmail = (email: string) => {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };*/

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email and password
        if (!username || !password) {
            setError('Username and Password are required');
            return;
        }

        /*if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }*/

        // Optional username validation
        if (username && username.length < 3) {
            setError('Username, if provided, must be at least 3 characters long');
            return;
        }

        // Clear any existing errors
        setError(null);

        try {
            // Call the onRegister callback with optional username
            if (onRegister) {
                await onRegister(username, email, password);
            }
        } catch (err) {
            // Handle errors from the onRegister function
            setError('An error occurred during registration. Please try again.');
            console.error(err); // Log the error for debugging purposes
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username " // Indicate that username is optional
            />
            <Input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email (optional)" 
            />
            <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            {error && <p>{error}</p>}
            <Button>Sign-Up</Button>
        </form>
    );
};

export default RegisterForm;