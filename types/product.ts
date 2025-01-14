import { Memory } from "./memory"
import { Color } from "./color"

export interface Product {
  id: number
  name: string
  price: number
  slug: string
  bonusPrice: number
  memory?: Memory
  color?: Color
  images?: { id: number; url: string }[]
}

export interface ProductDetails extends Product {
  colors: { id: number; name: string; slug: string; image: string }[]
  memories: { id: number; capacity: number; slug: string; unit: string }[]
}
