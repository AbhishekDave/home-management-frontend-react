// src/components/shared_components/button_component/Button.tsx
import React from 'react';
import './button.css'

interface ButtonProps {
  onClick?: (event?: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
