export type Product = {
  id: string
  title: string
  rating?: number
  thumbnail?: string
}

export type ProductDetails = Product & {
  description: string
  category: string
  price: number
  stock: number
  images: string[]
}

export type JsonResponse = {
  products: ProductDetails[]
}
