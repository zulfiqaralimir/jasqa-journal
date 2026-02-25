import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-02-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want to ensure fresh data
  token: process.env.SANITY_API_READ_TOKEN, // Optional: for better performance
})

// Image URL builder
const builder = imageUrlBuilder(client)

// Helper function to generate Sanity image URLs
export function urlForImage(source: any) {
  return builder.image(source)
}
