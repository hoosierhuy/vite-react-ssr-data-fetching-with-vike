// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>

// Libraries imports
/**  The node-fetch package (which only works on the server-side) can be used since this file always runs on the server-side, see https://vike.dev/data#server-side */
import fetch from 'node-fetch'
import type { PageContextServer } from 'vike/types'

// Local imports
import { JsonResponse, ProductDetails, Product } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  // "dummyjson" is a free api that generates dummy data, with many features that works very well for testing purposes.
  const response = await fetch('https://dummyjson.com/products?limit=10')
  const jsonResponse = (await response.json()) as JsonResponse
  const productsData = jsonResponse.products
  const products = minimize(productsData)

  return {
    products,
    // Render product count in browser's tab title
    title: `${productsData.length} Dummy Inc Products Available`,
  }
}

function minimize(products: ProductDetails[]): Product[] {
  return products.map((product) => {
    const { id, title, rating, thumbnail } = product

    return { id, title, rating, thumbnail }
  })
}
