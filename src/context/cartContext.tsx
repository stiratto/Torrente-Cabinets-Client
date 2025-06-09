import { CartProduct } from "@/lib/interfaces/Product.Interface";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
   cart: CartProduct[],
   setCart: React.Dispatch<React.SetStateAction<CartProduct[] | []>>
}

const CartContext= createContext<CartContextType | null>(null)


export const useCartContext = () => {
   const context = useContext(CartContext)
   if (!context) {
      throw new Error("useCartContext() should be used inside a CartContext")
   }

   return context;
} 


function CartProvider  ({children}: {children: React.ReactNode}) {
   const [cart, setCart] = useState<CartProduct[] | []>(() => {
      const cart = JSON.parse(localStorage.getItem("cart") as string)
      return (cart && cart.length > 0) ? cart : []
   })

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
   }, [cart])

   return (
      <CartContext.Provider value={{cart, setCart}}>
         {children}
      </CartContext.Provider>
   )
}



export default CartProvider
