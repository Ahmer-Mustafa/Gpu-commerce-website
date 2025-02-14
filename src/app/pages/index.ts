import { createClient } from '@sanity/client';

// Create Sanity client instance
export const client = createClient({
  projectId: '6qhqyt37', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name (default: 'production')
  useCdn: true, // Use CDN for faster response (optional)
  apiVersion: '2023-01-01', // Set API version (optional)
  token: process.env.SANITY_API_TOKEN, // If you need to set a token for private API calls
});

// Query function to fetch products
export const getProducts = async () => {
  try {
    const query = `*[_type == "product"]{
      _id,
      title,
      price,
      description,
      image {
        asset -> {
          _id,
          url
        }
      }
    }`;
    
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    return [];
  }
};

// You can also create other functions for fetching different content
// Example function to fetch product by slug
export const getProductBySlug = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    price,
    description,
    image {
      asset -> {
        _id,
        url
      }
    }
  }`;

  try {
    const product = await client.fetch(query, { slug });
    return product;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};
