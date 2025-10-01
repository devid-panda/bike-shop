export interface Bike {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: 'bike' | 'road' | 'mountain' | 'helmet';
  description: string;
  specifications: {
    frame: string;
    gears: string;
    brakes: string;
    wheels: string;
    weight: string;
  };
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  bike: Bike;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

