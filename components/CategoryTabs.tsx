import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: number;
  onSelect: (id: number) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="sticky top-[64px] z-40 bg-luxe-black/95 backdrop-blur-sm pt-2 pb-4 border-b border-white/5">
      <div className="flex overflow-x-auto px-4 gap-3 no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`
              whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === cat.id 
                ? 'bg-luxe-gold text-luxe-black shadow-lg shadow-luxe-gold/20 scale-105' 
                : 'bg-white/5 text-luxe-gray hover:bg-white/10 hover:text-white border border-white/5'}
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};