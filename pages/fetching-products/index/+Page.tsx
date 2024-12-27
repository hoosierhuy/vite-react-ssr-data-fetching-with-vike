export default Page

import { useData } from '../../../renderer/useData'
import type { Data } from './+data'
import BackToTopButton from './BackToTopBtn'

/**
 * Render all the products fetched in the +data.ts file.
 */
function Page() {
  const { products } = useData<Data>()

  return (
    <>
      <h1>Fetching Products</h1>

      <p>
        Source:{' '}
        <a href="https://dummyjson.com/products" target="_blank">
          dummy json{' '}
        </a>
        (a robust free api).
      </p>
      <p>
        Data can be fetched on the <strong>server side</strong> by using the{' '}
        <a href="https://vike.dev/data-fetching#data-hook" target="_blank">
          data()
        </a>{' '}
        hook.
      </p>

      {products.map(({ id, title, rating, thumbnail }) => (
        <figure key={id} className="product-card">
          <a href={`/fetching-products/${id}`}>{title}</a>
          <p className="capitalize">Rating: {rating} ⭐️</p>
          <p>
            <img
              src={thumbnail}
              alt={`${title} thumbnail image`}
              title={`${title} thumbnail image`}
            />
          </p>
        </figure>
      ))}

      <BackToTopButton />
    </>
  )
}
