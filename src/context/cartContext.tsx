import { CartProduct } from "@/lib/interfaces/Product.Interface";
import { createContext, useContext, useState } from "react";

interface CartContextType {
   cart: CartProduct[],
   setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>
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
   const [cart, setCart] = useState<CartProduct[]>([])
   return (
      <CartContext.Provider value={{cart, setCart}}>
         {children}
      </CartContext.Provider>
   )
}



export default CartProvider
