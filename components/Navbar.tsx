import React from 'react';
import { RESTAURANT_NAME } from '../constants';
import { UtensilsCrossed } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { tableNumber } = useOrder();
  const location = useLocation();

  const isLanding = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isLanding ? 'bg-transparent' : 'bg-luxe-black/80 backdrop-blur-md border-b border-white/5'}`}>
      <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luxe-gold to-luxe-goldDim flex items-center justify-center shadow-lg shadow-luxe-gold/20">
            <UtensilsCrossed size={16} className="text-luxe-black" />
          </div>
          <span className="font-serif text-xl font-bold text-white tracking-wide">
            {RESTAURANT_NAME}
          </span>
        </div>
        
        {!isLanding && tableNumber && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-luxe-gold animate-pulse"></span>
            <span className="text-xs font-semibold text-luxe-gold tracking-wide">TABLE {tableNumber}</span>
          </div>
        )}
      </div>
    </nav>
  );
};