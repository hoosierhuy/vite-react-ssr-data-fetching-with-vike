export { Page }

// Local imports
import { useData } from '../../../renderer/useData'
import type { Data } from './+data'
import { Link } from '../../../renderer/Link'

function Page() {
  const { product } = useData<Data>()

  return (
    <>
      <Link href="/fetching-products">Back to All Products</Link>
      <h2>{product.title}</h2>

      <p>
        <strong>Description</strong>: {product.description}
      </p>

      <p className="capitalize">
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Availability:</strong> {product.stock} in stock
      </p>
      <p>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{ width: '100%', height: 'auto' }}
        />
      </p>
    </>
  )
}
