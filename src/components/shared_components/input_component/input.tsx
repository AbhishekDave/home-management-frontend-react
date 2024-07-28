// src/components/shared_components/input_component/Input.tsx
import React from 'react';
import './input.css'

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
