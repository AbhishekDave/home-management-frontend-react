import { useState } from 'react';
import { login as loginApi, register as registerApi } from '@/apis/authApi';
import { LoginData, RegisterData } from '@/types/authTypes';
import { useAuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  const { login: loginContext, logout: logoutContext } = useAuthContext();
  const [error, setError] = useState<string | null>(null);

  const login = async (credential: string, password: string) => {
    try {
      const LoginData: LoginData = { credential, password }
      const data = await loginApi(LoginData);
      loginContext(data.access_token);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
        const RegisterData: RegisterData = { username, email, password}
        await registerApi(RegisterData);
      // Handle successful registration (e.g., navigate to login page)
    } catch (err) {
      setError('Registration failed');
    }
  };

  return { login, register, error, logout: logoutContext };
};
