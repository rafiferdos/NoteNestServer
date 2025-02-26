import { Document } from 'mongoose'

export enum ProductCategory {
  Writing = 'Writing',
  OfficeSupplies = 'Office Supplies',
  ArtSupplies = 'Art Supplies',
  Educational = 'Educational',
  Technology = 'Technology',
}

export interface IProduct extends Document {
  name: string
  brand: string
  price: number
  imageUrl: string
  category: ProductCategory
  description: string
  quantity: number
  inStock: boolean
}
