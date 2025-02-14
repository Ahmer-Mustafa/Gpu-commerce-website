import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Components
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CyberTech Store",
  description: "High-performance GPUs and cutting-edge tech gear.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          <CartProvider> {/* ✅ FIXED */}
            <WishlistProvider>

              {children}

            </WishlistProvider>
          </CartProvider>
        </SearchProvider>
        
        <script
          src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
          async
        />
        <div
          hidden
          id="snipcart"
          data-api-key="YOUR_SNIPCART_API_KEY"
        ></div>
      </body>
    </html>
  );
}
