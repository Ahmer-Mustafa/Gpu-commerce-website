"use client";  // Add this line to indicate it's a client-side component

import React, { createContext, useState, useContext, ReactNode } from 'react';

type WishlistContextType = {
  wishlist: string[];  // Assuming it's an array of product IDs
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToWishlist = (id: string) => setWishlist([...wishlist, id]);
  const removeFromWishlist = (id: string) => setWishlist(wishlist.filter(item => item !== id));

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
