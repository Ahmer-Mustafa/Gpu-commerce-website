import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from '../env'

// Initialize the Sanity Image URL Builder
const builder = createImageUrlBuilder({ projectId, dataset })

// Function to generate image URLs
export const urlFor = (source: SanityImageSource) => builder.image(source)

// Default export (optional, for easier imports)
export default urlFor
