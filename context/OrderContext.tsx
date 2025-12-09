import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, MenuItem, OrderContextType } from '../types';

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tableNumber, setTableNumber] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedTable = localStorage.getItem('luxe_table_number');
    const savedCart = localStorage.getItem('luxe_cart');
    
    if (savedTable) setTableNumber(savedTable);
    if (savedCart) {
        try {
            setCart(JSON.parse(savedCart));
        } catch (e) {
            console.error("Failed to parse cart", e);
        }
    }
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    if (tableNumber) localStorage.setItem('luxe_table_number', tableNumber);
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
  }, [tableNumber, cart]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== itemId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <OrderContext.Provider
      value={{
        tableNumber,
        setTableNumber,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};