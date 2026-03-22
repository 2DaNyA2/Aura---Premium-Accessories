export type Category = 'All' | 'Wearables' | 'Bags' | 'Gadgets' | 'Audio' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  images: [string, string];
  inStock: boolean;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
