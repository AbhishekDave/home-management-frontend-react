import React, { useState } from 'react';
import Button from '../shared_components/button_component/button';
import Input from '../shared_components/input_component/input';

interface LoginFormProps {
  onLogin?: (credential: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [credential, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(credential, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={credential} onChange={(e) => setUsername(e.target.value)} placeholder="Username or Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {error && <p>{error}</p>}
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
