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

