import { Product } from '../types';
import { motion } from 'motion/react';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden mb-6">
        {/* Primary Image */}
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          referrerPolicy="no-referrer"
        />
        {/* Secondary Image (Hover) */}
        <img 
          src={product.images[1]} 
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {!product.inStock && (
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Sold Out
            </span>
          )}
          <span className="bg-black/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button 
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="flex-1 bg-white text-black py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
          <button 
            onClick={() => onQuickView(product)}
            className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg shrink-0"
            aria-label="Quick view"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start px-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
        </div>
        <span className="text-lg font-medium text-gray-900">${product.price}</span>
      </div>
    </motion.div>
  );
}
