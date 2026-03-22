import { Category } from '../types';
import { motion } from 'motion/react';
import { SlidersHorizontal, Package } from 'lucide-react';

interface FiltersProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  inStockOnly: boolean;
  onStockChange: (inStock: boolean) => void;
}

export function Filters({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  inStockOnly,
  onStockChange
}: FiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between py-8 border-b border-gray-200 mb-12">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" /> Max Price: ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([0, parseInt(e.target.value)])}
            className="w-48 accent-black"
          />
        </div>

        <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

        <label className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onStockChange(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-black transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors flex items-center gap-1.5">
            <Package className="w-4 h-4" /> In Stock
          </span>
        </label>
      </div>
    </div>
  );
}
