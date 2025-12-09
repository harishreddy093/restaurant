import React from 'react';
import { RESTAURANT_NAME } from '../constants';
import { ScanLine, UtensilsCrossed, ArrowUp } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const LandingPage: React.FC = () => {
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

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl shadow-black/80 animate-fade-in delay-100 flex flex-col items-center relative overflow-hidden">
            {/* Gloss Effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="w-20 h-20 bg-luxe-black rounded-2xl flex items-center justify-center border border-luxe-gold/30 text-luxe-gold mb-6 relative overflow-hidden group shadow-inner shadow-black/50">
                <div className="absolute inset-0 bg-luxe-gold/5 animate-pulse" />
                <ScanLine size={36} className="relative z-10 drop-shadow-lg" />
            </div>
            
            <h2 className="text-xl text-white font-serif font-medium mb-3">Welcome Guest</h2>
            
            <p className="text-gray-400 leading-relaxed text-sm">
                To view our menu and place an order, please scan the QR code located on your table.
            </p>

            <div className="mt-6 flex items-center gap-2 text-luxe-gold/50 text-xs uppercase tracking-widest font-semibold">
                <ScanLine size={12} />
                <span>Scan to Order</span>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-[10px] text-white/20 tracking-widest uppercase">
         Designed for {RESTAURANT_NAME}
      </div>
    </div>
  );
};