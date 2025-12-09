import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RESTAURANT_NAME } from '../constants';
import { UtensilsCrossed, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const LandingPage: React.FC = () => {
  const [tableNum, setTableNum] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tableNum.trim()) {
      navigate(`/t/${tableNum}`);
    }
  };

  return (
    <div className="min-h-screen bg-luxe-black relative overflow-hidden flex flex-col items-center justify-center">
      <Navbar />
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-luxe-gold/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-luxe-goldDim/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-luxe-black to-transparent z-20" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6 text-center">
        
        <div className="mb-10 animate-slide-up">
            <div className="w-20 h-20 bg-gradient-to-br from-luxe-gold to-luxe-goldDim rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-luxe-gold/20 mb-6 border border-white/10">
                 <UtensilsCrossed size={32} className="text-luxe-black" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-2xl">
                {RESTAURANT_NAME}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxe-gold to-transparent mx-auto rounded-full opacity-80" />
            <p className="mt-4 text-luxe-gray font-light text-lg tracking-wide">Premium Dining Experience</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl shadow-black/80 animate-fade-in delay-100 relative overflow-hidden">
            {/* Gloss Effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <h2 className="text-xl text-white font-serif font-medium mb-6 relative z-10">Welcome Guest</h2>
            
            <form onSubmit={handleSubmit} className="relative z-10 w-full space-y-4">
                <div className="relative group">
                    <input 
                        type="number" 
                        value={tableNum}
                        onChange={(e) => setTableNum(e.target.value)}
                        placeholder="Enter Table Number"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-center text-white placeholder-gray-500 focus:outline-none focus:border-luxe-gold/50 transition-all text-lg font-medium"
                        required
                        min="1"
                    />
                </div>

                <button 
                    type="submit"
                    disabled={!tableNum}
                    className="w-full bg-gradient-to-r from-luxe-gold to-luxe-goldDim text-luxe-black font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <span>Open Menu</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            <p className="mt-6 text-gray-500 text-xs leading-relaxed">
                Please enter your table number to view the menu and place your order.
            </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-[10px] text-white/20 tracking-widest uppercase">
         Designed for {RESTAURANT_NAME}
      </div>
    </div>
  );
};