import { IProduct } from './product.interface'
import { MProduct } from './product.model'

const sCreateProduct = async (
  productData: Partial<IProduct>,
): Promise<IProduct> => {
  const product = new MProduct(productData)
  await product.save()
  return product
}

interface ProductFilterOptions {
  searchTerm?: string
  category?: string
  inStock?: boolean
  minPrice?: number
  maxPrice?: number
}

const sGetAllProducts = async (
  filters: ProductFilterOptions = {},
): Promise<IProduct[]> => {
  const { searchTerm, category, inStock, minPrice, maxPrice } = filters

  const query: Record<string, any> = {}

  // Apply search term filter
  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: 'i' } },
      { brand: { $regex: searchTerm, $options: 'i' } },
      { category: { $regex: searchTerm, $options: 'i' } },
    ]
  }

  // Apply category filter
  if (category) {
    query.category = category
  }

  // Apply in-stock filter
  if (inStock !== undefined) {
    query.inStock = inStock
  }

  // Apply price range filters
  if (minPrice !== undefined || maxPrice !== undefined) {
    query.price = {}
    if (minPrice !== undefined) {
      query.price.$gte = minPrice
    }
    if (maxPrice !== undefined) {
      query.price.$lte = maxPrice
    }
  }

  return await MProduct.find(query)
}

const sGetProductById = async (productId: string): Promise<IProduct | null> => {
  return await MProduct.findById(productId)
}

const sUpdateProduct = async (
  productId: string,
  updateData: Partial<IProduct>,
): Promise<IProduct | null> => {
  const product = await MProduct.findByIdAndUpdate(productId, updateData, {
    new: true,
  })
  return product
}

const sDeleteProduct = async (productId: string): Promise<IProduct | null> => {
  const product = await MProduct.findByIdAndDelete(productId)
  return product
}

export const SProduct = {
  sCreateProduct,
  sGetAllProducts,
  sGetProductById,
  sUpdateProduct,
  sDeleteProduct,
}
