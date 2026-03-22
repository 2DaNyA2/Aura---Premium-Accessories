import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-50 pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=2000&q=80" 
          alt="Premium Accessories" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-gray-900 mb-6"
        >
          Elevate Your <br className="hidden sm:block" />
          <span className="italic font-light">Everyday.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Discover our curated collection of premium accessories designed for the modern minimalist. Form meets function in perfect harmony.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={onExplore} className="bg-black text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto">
            Explore Collection
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
