import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { CURRENCY_SYMBOL, KITCHEN_WHATSAPP } from '../constants';
import { ShoppingBag, ChevronRight, MessageCircle, X } from 'lucide-react';

export const CartSummary: React.FC = () => {
  const { cart, cartTotal, itemCount, tableNumber } = useOrder();
  const [isExpanded, setIsExpanded] = useState(false);

  if (itemCount === 0) return null;

  const handleWhatsAppOrder = () => {
    // Format:
    // New Order
    // Table: 5
    // 
    // Items:
    // • Item x 2 – $20.00
    //
    // Total: $20.00
    
    let message = `*New Order*\n`;
    message += `Table: *${tableNumber}*\n\n`;
    message += `Items:\n`;
    
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `• ${item.name} x ${item.quantity} – ${CURRENCY_SYMBOL}${itemTotal.toFixed(2)}\n`;
    });
    
    message += `\n*Total: ${CURRENCY_SYMBOL}${cartTotal.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${KITCHEN_WHATSAPP}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop for expanded state */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity animate-fade-in"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Cart Container */}
      <div className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isExpanded ? 'h-[85vh]' : 'h-auto'}`}>
        <div className="bg-[#121212] border-t border-luxe-gold/20 rounded-t-[2rem] shadow-[0_-10px_60px_-15px_rgba(227,178,60,0.2)] w-full h-full flex flex-col max-w-md mx-auto relative overflow-hidden">
          
          {/* Expanded Content (Order List) */}
          {isExpanded && (
            <div className="flex-1 flex flex-col h-full animate-slide-up">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div>
                   <h2 className="text-2xl font-serif font-medium text-white">Your Selection</h2>
                   <p className="text-luxe-gold text-sm mt-1">Table {tableNumber}</p>
                </div>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-start py-2">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-luxe-gold/10 flex items-center justify-center text-luxe-gold font-bold text-sm mt-1">
                        {item.quantity}
                      </div>
                      <div>
                         <span className="text-gray-200 block font-medium">{item.name}</span>
                         <span className="text-xs text-gray-500">{CURRENCY_SYMBOL}{item.price.toFixed(2)} each</span>
                      </div>
                    </div>
                    <span className="text-white font-medium tracking-wide">
                        {CURRENCY_SYMBOL}{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-[#0B0B0B] border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-400 font-light">Total Amount</span>
                  <span className="text-luxe-gold text-3xl font-serif">{CURRENCY_SYMBOL}{cartTotal.toFixed(2)}</span>
                </div>
                
                <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
                 >
                    <MessageCircle size={22} fill="white" />
                    Send to Kitchen
                 </button>
              </div>
            </div>
          )}

          {/* Sticky Bar Content (Collapsed) */}
          {!isExpanded && (
              <div className="p-4 bg-luxe-card/95 backdrop-blur-xl border-t border-white/5">
                <div 
                    onClick={() => setIsExpanded(true)}
                    className="bg-[#222] rounded-xl p-3 flex items-center justify-between cursor-pointer border border-white/5 hover:border-luxe-gold/30 transition-colors group"
                >
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-lg bg-luxe-gold flex items-center justify-center text-luxe-black shadow-lg shadow-luxe-gold/20">
                                <ShoppingBag size={20} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-black border-2 border-[#222]">
                                {itemCount}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium group-hover:text-luxe-gold transition-colors">Review Order</span>
                            <span className="text-xl font-serif text-white">{CURRENCY_SYMBOL}{cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/50 pr-2">
                        <span className="text-sm">View</span>
                        <ChevronRight size={18} />
                    </div>
                </div>
              </div>
          )}
        </div>
      </div>
    </>
  );
};