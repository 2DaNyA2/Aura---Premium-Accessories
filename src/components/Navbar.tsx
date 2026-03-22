import { ShoppingBag, Menu, Search, Store, Layers, Info as InfoIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onDemoAction: () => void;
}

export function Navbar({ cartCount, onOpenCart, searchQuery, onSearchChange, onDemoAction }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors lg:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-gray-900">
              AURA.
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button onClick={onDemoAction} className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
              <Store className="w-4 h-4" /> Shop
            </button>
            <button onClick={onDemoAction} className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
              <Layers className="w-4 h-4" /> Collections
            </button>
            <button onClick={onDemoAction} className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
              <InfoIcon className="w-4 h-4" /> About
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black outline-none transition-all w-48 focus:w-64"
              />
            </div>
            <button 
              onClick={onOpenCart}
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
