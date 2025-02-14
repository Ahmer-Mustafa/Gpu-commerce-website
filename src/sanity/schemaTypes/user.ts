export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Full Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        description: 'Hashed password for security',
      },
      {
        name: 'address',
        type: 'text',
        title: 'Address',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone Number',
      },
      {
        name: 'orders',
        type: 'array',
        title: 'Orders',
        of: [{ type: 'reference', to: [{ type: 'order' }] }],
        description: 'User order history',
      },
    ],
  };
  