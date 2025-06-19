import createSchema from 'part:@sanity/base/schema-creator'
import shows from './shows'
import pictures from './pictures'

export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([shows, pictures]),
  })