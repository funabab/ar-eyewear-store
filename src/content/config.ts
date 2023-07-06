import { defineCollection, reference, z } from 'astro:content'

const collectionCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    products: z.array(reference('product')),
  }),
})

const productCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      modelPath: z.string(),
      previewImage: image(),
      price: z.number(),
      description: z.string(),
      details: z.string(),
      delivery: z.string(),
      variants: z.array(
        z.object({
          id: z.string(),
          color: z.string(),
          name: z.string(),
        })
      ),
      createdAt: z.string().datetime(),
    }),
})

export const collections = {
  collection: collectionCollection,
  product: productCollection,
}
