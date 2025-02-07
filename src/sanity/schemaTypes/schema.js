// schemas/schema.js
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import gpu from './gpu';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([gpu]),
});
