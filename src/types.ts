export type ProductDetails = {
  id: string
  title: string
  rating?: number
  thumbnail?: string
  description: string
  category: string
  price: number
  stock: number
  images: string[]
}

export type JsonResponse = {
  products: ProductDetails[]
}
