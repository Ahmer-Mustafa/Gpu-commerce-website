import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import user from './user'
import order from './order'
import category from './category'
import contactMessage from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, user, order, category, contactMessage],
};
