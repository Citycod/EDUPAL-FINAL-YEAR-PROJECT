import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding1 from './pages/onboarding/Onboarding1';
import Onboarding2 from './pages/onboarding/Onboarding2';
import Onboarding3 from './pages/onboarding/Onboarding3';
import Login from './pages/auth/Login';
import Home from './pages/main/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding/1" element={<Onboarding1 />} />
        <Route path="/onboarding/2" element={<Onboarding2 />} />
        <Route path="/onboarding/3" element={<Onboarding3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;