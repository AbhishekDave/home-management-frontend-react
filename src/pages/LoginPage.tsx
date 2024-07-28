// src/pages/LoginPage.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/apis/authApi";
import LoginForm from "@/components/login_component/LoginForm";
import '@/components/login_component/LoginForm.css'

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (credential: string, password: string) => {
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await login({ credential, password });
      // Handle successful login (e.g., store token securely)

      // Assuming response.data contains the access token
      // **Insecure Storage - Replace with secure storage mechanism**
      localStorage.setItem("accessToken", response.access_token);

      navigate("/"); // Redirect to the home page after successful login

    } 
    catch (error: any) {
      if (error.response) { // Check if there's a response object
        if (error.response.status === 400) {
          setError(error.response.data.message); // Specific backend validation error message --> Missing username or password.
        } else if (error.response.status === 404) {
          setError(error.response.data.message); // Specific backend validation error message --> User not found.
        } else if (error.response.status === 401) {
          setError(error.response.data.message); // Specific backend validation error message --> Invalid Credentials, Please try again.
        } else {
          console.error('Unexpected error:', error); // Log unexpected errors
          setError('An error occurred during login. Please try again.');
        }
      } else {
        console.error('Network error:', error); // Log network errors
        setError('An error occurred during login. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <header>
        <h1>Your App Name</h1>
      </header>
      <LoginForm onLogin={handleLogin} /> {/* Passing handleLogin as a prop */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {isLoading && <p>Logging in, Please Wait...</p>} {/* Show loading state */}
      <p>
        New user? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginPage;
