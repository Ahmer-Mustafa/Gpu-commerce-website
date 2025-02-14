export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      description: 'Unique identifier for the product, used in the URL',
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      description: 'GPU Brand (e.g., NVIDIA, AMD)',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Gaming', value: 'gaming' },
          { title: 'Workstation', value: 'workstation' },
          { title: 'AI', value: 'ai' },
        ],
      },
      description: 'Select the GPU category',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price before discount',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating of the product',
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add tags like "new arrival", "bestseller", etc.',
    },
    {
      name: 'vram',
      type: 'array',
      title: 'VRAM',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add VRAM options like 8GB, 12GB, 16GB, etc.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'keyFeatures',
      type: 'array',
      title: 'Key Features',
      of: [{ type: 'string' }],
      description: 'Highlight the main features of the product',
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
      description: 'Number of items available in stock',
    },
  ],
};
