import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Filters } from './components/Filters';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { QuickViewModal } from './components/QuickViewModal';
import { products } from './data';
import { Category, Product, CartItem } from './types';

const CATEGORIES: Category[] = ['All', 'Wearables', 'Bags', 'Gadgets', 'Audio', 'Accessories'];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [demoMessage, setDemoMessage] = useState<string | null>(null);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const showDemoAlert = (message: string) => {
    setDemoMessage(message);
    setTimeout(() => setDemoMessage(null), 4000);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchStock = !inStockOnly || product.inStock;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchPrice && matchStock && matchSearch;
    });
  }, [selectedCategory, priceRange, inStockOnly, searchQuery]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onDemoAction={() => showDemoAlert('This feature is disabled. This is a demo site, your data is not collected.')}
      />
      
      <main>
        <Hero onExplore={() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold tracking-tight mb-4">New Arrivals</h2>
            <p className="text-gray-500 text-lg">Discover the latest additions to our premium collection.</p>
          </div>

          <Filters
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            inStockOnly={inStockOnly}
            onStockChange={setInStockOnly}
          />

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-2xl font-serif text-gray-400 mb-4">No products found</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange([0, 500]);
                  setInStockOnly(false);
                }}
                className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </section>
      </main>

      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl font-bold tracking-tighter text-gray-900 mb-4">AURA.</p>
          <p className="text-gray-500 text-sm">© 2026 Aura Premium Accessories. All rights reserved.</p>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={() => showDemoAlert('Checkout is unavailable. This is a demo site, we do not collect your data or process payments.')}
      />

      <AnimatePresence>
        {quickViewProduct && (
          <QuickViewModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {demoMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-0 right-0 mx-auto z-[100] bg-black text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 w-[90%] max-w-md border border-gray-800"
          >
            <Info className="w-6 h-6 text-blue-400 shrink-0" />
            <span className="font-medium text-sm leading-snug">{demoMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
