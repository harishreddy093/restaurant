import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { OrderProvider } from './context/OrderContext';
import { LandingPage } from './pages/LandingPage';
import { MenuPage } from './pages/MenuPage';

const App: React.FC = () => {
  return (
    <OrderProvider>
      <HashRouter>
        <Routes>
          {/* Default landing page if no QR scanned */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Dynamic Route for Tables: /t/1, /t/2 etc. */}
          <Route path="/t/:tableId" element={<MenuPage />} />
          
          {/* Redirect old menu route to home for safety */}
          <Route path="/menu" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </OrderProvider>
  );
};

export default App;