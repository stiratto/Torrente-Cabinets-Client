import { productsApi } from "@/api";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CartProduct } from "./interfaces/Product.Interface";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const addToCart = async (setCart, cart: CartProduct[], id: number) => {
  try {
    const productDetails = await productsApi.getProductDetails(id);

    // Verify if the product is on the cart.
    const existingProductIndex = cart.findIndex(
      (item: any) => item.id === id
    );

    if (existingProductIndex !== -1) {
      // If the product is already on the cart, increase the quantity.
      const product = cart.find((_, i) => i === existingProductIndex)
      if (product) {
        product.product_quantity += 1
      }
    } else {
      // If the product is not on the cart, add it with the quantity of 1.

      setCart({
        ...cart,
        productDetails 
      })

    }


  } catch (error) {
    console.error(`Error adding product ${id} to cart:`, error);
  }
};
