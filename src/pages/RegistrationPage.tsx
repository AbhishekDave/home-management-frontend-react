import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@/apis/authApi";
import RegistrationForm from "@/components/register_component/RegistrationForm";
import "@/components/register_component/RegistrationForm.css";

const RegistrationPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await register({ username, email, password });
      // Handle successful registration (e.g., redirect or confirmation message)

      // Assuming response.data contains a success message
      alert("Registration successful! Please check your email for confirmation (if applicable).");
      // **Insecure Storage - Replace with secure storage mechanism**
      localStorage.setItem("accessToken", response.access_token);
      navigate("/homepage"); // Redirect to login page after successful registration

    } catch (error: any) {
      if (error.response) { // Check if there's a response object
        if (error.response.status === 400) {
          setError(error.response.data.message); // Specific backend validation error message
        } else {
          console.error('Unexpected error:', error); // Log unexpected errors
          setError('An error occurred during registration. Please try again.');
        }
      } else {
        console.error('Network error:', error); // Log network errors
        setError('An error occurred during registration. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h1>HomeezyPro</h1>
      <p>Plan Yourself Easy</p>
      <RegistrationForm onRegister={handleRegister} /> {/* Passing handleRegister as a prop */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {isLoading && (
        <div className="loading">
          <div className="loader"
          ></div>
        </div>
      )} {/* Show loading state */}
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
};

export default RegistrationPage;
