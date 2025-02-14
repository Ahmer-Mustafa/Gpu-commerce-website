import React from "react";
import { client } from "@/src/sanity/lib/client";
import { GetServerSideProps } from "next";


// Define a TypeScript interface for the product data
interface Product {
  _id: string;
  title: string;
  price: number;
}

interface HomeProps {
  products: Product[];
}

// ✅ Fetch data from Sanity
export const getServerSideProps: GetServerSideProps = async () => {
  const products: Product[] = await client.fetch(`*[_type == "product"]`);
  return { props: { products } };
};

// ✅ Display products
export default function Home({ products }: HomeProps) {
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
