import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CategoryTabs } from '../components/CategoryTabs';
import { MenuItemCard } from '../components/MenuItemCard';
import { CartSummary } from '../components/CartSummary';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import { useOrder } from '../context/OrderContext';

export const MenuPage: React.FC = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const { setTableNumber } = useOrder();
  const navigate = useNavigate();

  // Sync URL table ID with Context
  useEffect(() => {
    if (tableId) {
      setTableNumber(tableId);
    } else {
      // Fallback if somehow reached without ID (though routing prevents this)
      navigate('/');
    }
  }, [tableId, setTableNumber, navigate]);

  // Filter items
  const filteredItems = activeCategory === 1 
    ? MENU_ITEMS.filter(item => item.isFeatured)
    : MENU_ITEMS.filter(item => item.categoryId === activeCategory);

  const activeCategoryName = CATEGORIES.find(c => c.id === activeCategory)?.name;

  return (
    <div className="min-h-screen bg-luxe-black pb-32">
      <Navbar />
      
      {/* Hero Header Space */}
      <div className="h-20" />
      
      <div className="px-4 py-6 max-w-md mx-auto">
        <div className="flex justify-between items-end mb-2">
            <h1 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxe-gold to-white">
            Experience Taste
            </h1>
        </div>
        <p className="text-luxe-gray text-sm">Select a category to begin your journey.</p>
      </div>

      <CategoryTabs 
        categories={CATEGORIES} 
        activeCategory={activeCategory} 
        onSelect={setActiveCategory} 
      />

      <div className="max-w-md mx-auto px-4 mt-6 animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
             <div className="h-px bg-gradient-to-r from-luxe-gold/50 to-transparent flex-1" />
             <span className="text-luxe-gold text-xs uppercase tracking-widest font-semibold">{activeCategoryName}</span>
             <div className="h-px bg-gradient-to-l from-luxe-gold/50 to-transparent flex-1" />
        </div>

        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}

        {filteredItems.length === 0 && (
           <div className="text-center py-20 text-gray-500">
               No items available in this category.
           </div>
        )}
      </div>

      <CartSummary />
    </div>
  );
};