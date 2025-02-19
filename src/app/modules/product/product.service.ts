import { IProduct } from "./product.interface";
import { MProduct } from "./product.model";

const sCreateProduct = async(
  productData: Partial<IProduct>,
): Promise<IProduct> => {
  const product = new MProduct(productData)
  await product.save()
  return product
}

const sGetAllProducts = async(
  searchTerm?: string,
): Promise<IProduct[]> => {
  const query = searchTerm
    ? {
      $or: [
        { name: searchTerm },
        { brand: searchTerm },
        { category: searchTerm },
    ]
    }
    : {}
  return await MProduct.find(query)
}

const sGetProductById = async(
  productId: string,
): Promise<IProduct | null> => {
  return await MProduct.findById(productId)
}

const sUpdateProduct = async(
  productId: string,
  updateData: Partial<IProduct>,
): Promise<IProduct | null> => {
  const product
    = await
      MProduct
        .findByIdAndUpdate(productId, updateData, { new: true })
  return product
}

const sDeleteProduct = async(
  productId: string,
): Promise<IProduct | null> => {
  const product = await MProduct
    .findByIdAndDelete(productId)
  return product
}
