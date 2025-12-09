import React from 'react';
import { MenuItem } from '../types';
import { Plus, Minus, Leaf } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { CURRENCY_SYMBOL } from '../constants';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { cart, addToCart, removeFromCart } = useOrder();
  
  const cartItem = cart.find(i => i.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="group relative flex gap-4 p-4 rounded-2xl bg-luxe-card/50 border border-white/5 backdrop-blur-sm overflow-hidden hover:bg-luxe-card/80 transition-all duration-300 mb-4">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Container */}
      <div className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {item.veg ? (
           <div className="absolute top-1 left-1 bg-green-900/80 backdrop-blur-md p-1 rounded-full border border-green-500/30">
             <Leaf size={10} className="text-green-400" />
           </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-serif font-medium text-white text-lg leading-tight mb-1">{item.name}</h3>
          </div>
          <p className="text-xs text-luxe-gray line-clamp-2 leading-relaxed mb-3">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-luxe-gold font-medium font-serif text-lg">
            {CURRENCY_SYMBOL}{item.price.toFixed(2)}
          </span>

          {quantity === 0 ? (
            <button 
              onClick={() => addToCart(item)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-luxe-gold hover:text-luxe-black transition-colors"
            >
              <Plus size={16} />
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-luxe-black rounded-full px-1 py-1 border border-luxe-gold/30">
              <button 
                onClick={() => removeFromCart(item.id)}
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-400 transition-colors"
              >
                <Minus size={12} />
              </button>
              <span className="text-sm font-medium text-white w-3 text-center">{quantity}</span>
              <button 
                onClick={() => addToCart(item)}
                className="w-6 h-6 rounded-full bg-luxe-gold flex items-center justify-center text-luxe-black hover:bg-white transition-colors"
              >
                <Plus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};