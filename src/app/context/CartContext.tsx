// src/app/context/CartContext.tsx

"use client";  // Add this line to indicate that this is a client component

import React, { createContext, useState, useContext, ReactNode } from "react";

type CartContextType = {
  cartItems: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
