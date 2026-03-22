import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Aura Vision',
    description: 'Premium smart glasses with augmented reality display, bone conduction audio, and all-day battery life. The future of wearable technology.',
    price: 299,
    category: 'Wearables',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: ['AR Display', 'Bone Conduction', '24h Battery', 'Water Resistant']
  },
  {
    id: '2',
    name: 'Nomad X',
    description: 'Modular backpack designed for urban explorers. Features magnetic attachments, waterproof exterior, and hidden compartments.',
    price: 149,
    category: 'Bags',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547949007-5350528aafb6?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: ['Modular Design', 'Waterproof', 'Hidden Pockets', 'Laptop Sleeve']
  },
  {
    id: '3',
    name: 'Zen Pad',
    description: 'Minimalist wireless charging pad crafted from solid aluminum and premium vegan leather. Fast charges up to 3 devices simultaneously.',
    price: 89,
    category: 'Gadgets',
    images: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622445272461-c6580cab8755?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: false,
    features: ['15W Fast Charge', 'Aluminum Body', 'Vegan Leather', '3-Device Support']
  },
  {
    id: '4',
    name: 'Aura Loop',
    description: 'Titanium smart ring that tracks your sleep, activity, and recovery with clinical-grade accuracy. Ultra-lightweight and durable.',
    price: 199,
    category: 'Wearables',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478524-fb5244098775?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: ['Titanium Build', 'Sleep Tracking', 'Heart Rate', '7-Day Battery']
  },
  {
    id: '5',
    name: 'Silence Pro',
    description: 'Active noise-canceling earbuds with studio-quality sound. Ergonomic design ensures a perfect fit for all-day listening.',
    price: 249,
    category: 'Audio',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: ['ANC', 'Studio Sound', 'Ergonomic Fit', 'Wireless Charging Case']
  },
  {
    id: '6',
    name: 'Slim Core',
    description: 'Ultra-slim carbon fiber wallet with RFID protection. Holds up to 12 cards and cash while maintaining a minimalist profile.',
    price: 69,
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: ['Carbon Fiber', 'RFID Blocking', '12 Card Capacity', 'Money Clip']
  }
];
