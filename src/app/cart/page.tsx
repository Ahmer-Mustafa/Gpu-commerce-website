"use client";

import { useState } from "react";
import { Minus, Plus, Trash } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "NVIDIA RTX 4090",
      description: "24GB GDDR6X, Ray Tracing, DLSS 3",
      price: 1599.99,
      quantity: 1,
      image: "/images/rtx-4090.jpg",
    },
  ]);

  const recommendedProducts = [
    {
      id: 2,
      name: "AMD Radeon RX 7900 XTX",
      description: "24GB GDDR6, Ray Tracing, FSR 3",
      price: 999.99,
      image: "/images/rx-7900xtx.jpg",
    },
    {
      id: 3,
      name: "NVIDIA RTX 4070 Ti",
      description: "12GB GDDR6X, Ray Tracing, DLSS 3",
      price: 799.99,
      image: "/images/rtx-4070ti.jpg",
    },
  ];

  // Typing the updateQuantity and removeItem functions
  const updateQuantity = (id: number, delta: number): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.07;
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-black text-neon-green flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold border-b-2 border-neon-green pb-2 text-center">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Cart Items */}
          <div className="md:col-span-2 bg-gray-900 p-6 rounded-lg shadow-lg border border-neon-green">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-neon-green py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      <Minus className="text-neon-green w-5 h-5 hover:text-green-400" />
                    </button>
                    <span className="text-xl font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <Plus className="text-neon-green w-5 h-5 hover:text-green-400" />
                    </button>
                    <span className="text-xl font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeItem(item.id)}>
                      <Trash className="text-red-500 w-5 h-5 hover:text-red-700" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">Your cart is empty.</p>
            )}
          </div>
          
          {/* Summary */}
          <div className="bg-gray-900 p-6 rounded-lg border border-neon-green shadow-lg">
            <h2 className="text-2xl font-semibold text-center">Summary</h2>
            <div className="mt-4 border-b border-neon-green pb-2">
              <p className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>GST (7%):</span>
                <span>${gst.toFixed(2)}</span>
              </p>
            </div>
            <p className="flex justify-between text-xl font-bold mt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </p>
            <button className="w-full bg-neon-green hover:bg-green-500 text-black font-semibold py-2 rounded-full mt-4 shadow-lg">
              CHECKOUT
            </button>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold border-b-2 border-neon-green pb-2">Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-gray-900 p-4 rounded-lg border border-neon-green shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                <button className="w-full bg-neon-green hover:bg-green-500 text-black font-semibold py-2 rounded-full mt-4 shadow-lg">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
