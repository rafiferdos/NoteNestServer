import { IProduct } from "./product.interface";

const createProduct = async(
  productData: Partial<IProduct>,
): Promise<IProduct> => {
  const product = new MProduct(productData)
  await product.save()
  return product
}