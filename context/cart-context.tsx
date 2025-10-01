import { Bike, CartItem } from '@/types/bike';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface CartContextType {
  items: CartItem[];
  addToCart: (bike: Bike) => void;
  removeFromCart: (bikeId: string) => void;
  updateQuantity: (bikeId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (bike: Bike) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.bike.id === bike.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.bike.id === bike.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { bike, quantity: 1 }];
    });
  };

  const removeFromCart = (bikeId: string) => {
    setItems(currentItems => currentItems.filter(item => item.bike.id !== bikeId));
  };

  const updateQuantity = (bikeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bikeId);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.bike.id === bikeId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = (): number => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = (): number => {
    return items.reduce((total, item) => total + (item.bike.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

