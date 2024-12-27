// Library imports
import { useQuery } from '@tanstack/react-query'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from 'react-router-dom'

// Local imports
import { JsonResponse, ProductDetails } from '../types'
import BackToTopButton from '../components/BackToTopBtn'
import './App.css'

export default function App() {
  return (
    // React Router v6
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

// Components
// GET all products
function Products() {
  const fetchProducts = async () => {
    // "dummyjson" is a free api that generates dummy data, with many features that works very well for testing purposes.
    const response = await fetch('https://dummyjson.com/products?limit=5')
    const jsonResponse = (await response.json()) as JsonResponse

    return jsonResponse.products
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (isPending) return <article>Loading...</article>

  if (error) return <article>An error has occurred: {error.message}</article>

  return (
    <>
      <h2>Products</h2>

      {data?.map(({ id, title, rating, thumbnail }) => (
        <figure key={id} className="product-card">
          <h3>
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
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

// GET product by id
function ProductDetail() {
  const fetchProduct = async (
    id: string | unknown
  ): Promise<ProductDetails> => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)

    return (await response.json()) as ProductDetails
  }

  const { id } = useParams()
  const { isPending, error, data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  })

  if (isPending) return <article>Loading...</article>
  if (error) return <article>An error has occurred: {error.message}</article>

  const { title, description, category, price, stock, images } = data

  return (
    <section>
      <h2>{title}</h2>
      <p>
        <Link to="/">Back to products</Link>
      </p>
      <p>
        <strong>Description</strong>: {description}
      </p>

      <p className="capitalize">
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Availability:</strong> {stock} in stock
      </p>
      <p>
        <img
          src={images[0]}
          alt={`${title} image`}
          title={`${title} image`}
          style={{ width: '50%', height: 'auto' }}
        />
      </p>
    </section>
  )
}
