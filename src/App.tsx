// src/app.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" /> {/* element={<LoginPage />} */}
        <Route path="/login" element={<LoginPage />} /> {/* element={<LoginPage />} */}
      </Routes>
    </BrowserRouter>
  );
};

export default App