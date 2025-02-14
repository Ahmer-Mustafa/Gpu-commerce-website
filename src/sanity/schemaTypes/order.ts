export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'user',
        type: 'reference',
        title: 'User',
        to: [{ type: 'user' }],
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
      },
      {
        name: 'paymentMethod',
        type: 'string',
        title: 'Payment Method',
        options: {
          list: [
            { title: 'Credit Card', value: 'credit_card' },
            { title: 'PayPal', value: 'paypal' },
            { title: 'Cash on Delivery', value: 'cod' },
          ],
        },
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  