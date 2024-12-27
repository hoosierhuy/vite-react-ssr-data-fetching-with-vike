// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>

// Libraries imports
/** The node-fetch package (which only works on the server-side) can be used since this file always runs on the server-side, see https://vike.dev/data#server-side */
import fetch from 'node-fetch'
import type { PageContextServer } from 'vike/types'

// Local imports
import type { ProductDetails } from '../types'

const data = async (pageContext: PageContextServer) => {
  // Conceptually very similar to React-Router.
  const { id } = pageContext.routeParams
  const response = await fetch(`https://dummyjson.com/products/${id}`)

  let product = (await response.json()) as ProductDetails

  /** We remove data we don't need because the data is passed to the client. We should minimize what is sent over the network. */
  product = minimize(product)

  return {
    product,
    // Render product name in the browser's tab title.
    title: product.title,
    // Dynamically setting the description meta tag to the description of the product coming from the API
    description: product.description,
  }
}

function minimize(
  product: ProductDetails & Record<string, unknown>
): ProductDetails {
  const { id, title, description, category, price, stock, images } = product

  product = { id, title, description, category, price, stock, images }

  return product
}
