import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md hover:bg-white rounded-full transition-colors text-gray-900"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.images[activeImage]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {!product.inStock && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Sold Out
              </div>
            )}
          </div>
          
          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                  activeImage === idx ? 'border-black' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <div className="mb-2">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{product.category}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-2xl font-medium text-gray-900 mb-6">${product.price}</p>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              !product.inStock 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : added
                  ? 'bg-green-500 text-white'
                  : 'bg-black text-white hover:bg-gray-800 shadow-xl shadow-black/10'
            }`}
          >
            {!product.inStock ? (
              'Out of Stock'
            ) : added ? (
              <>
                <Check className="w-5 h-5" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                Add to Cart - ${product.price}
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
