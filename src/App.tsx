// src/app.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" /> {/* element={<LoginPage />} */}
        <Route path="/login" element={<LoginPage />} /> {/* element={<LoginPage />} */}
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App