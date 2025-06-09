import { productsApi } from "@/api";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CartProduct } from "./interfaces/Product.Interface";
import { toast } from "react-hot-toast"
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractUserStats = (token: string) => {
  try {
    const { name, role, id} = JSON.parse(atob(token.split(".")[1]));
    
    return { name, role, id}
  } catch (e: any) {
    throw new Error(e)
  }
}

export const addToCart = async (setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>, cart: CartProduct[], id: number) => {
  try {
    const productDetails = await productsApi.getProductDetails(id);
    const existingProduct = cart?.find(p => p.id == id)

    if (existingProduct) {
      const updatedCart = cart.map((p) =>
        p.id === id ? {...p, product_quantity: p.product_quantity + 1} : p
      )

      setCart(updatedCart)
      toast.success("Product added to cart")
    } else {
      if (productDetails) {
        const product: CartProduct = {
          id: productDetails.id,
          product_name: productDetails.product_name,
          product_quantity: 1,
          product_description: productDetails.product_description,
          product_price: productDetails.product_price,
          product_stock: productDetails.product_stock,
          product_image: productDetails.product_image,
        }
        setCart((value) => [...value, product])
        toast.success("Product added to cart")
      }
    }

  } catch (error) {
    console.error(`Error adding product ${id} to cart:`, error);
  }
};
