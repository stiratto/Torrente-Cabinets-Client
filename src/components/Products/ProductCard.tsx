import { useCartContext } from "@/context/cartContext"
import { useUserContext } from "@/context/userContext"
import { IProduct } from "@/lib/interfaces/Product.Interface"
import { addToCart } from "@/lib/utils"
import { NavLink as Link } from "react-router-dom"
import { Button } from "../ui/button"

export const ProductCard = ({product, deleteProduct, getProducts}: 
   {product: IProduct, 
   deleteProduct: (id: number) => void,
   getProducts: () => void }
   ) => {

   const {cart, setCart } = useCartContext()
   const {user} = useUserContext()

   
   return (
      <Link
     to={`/torrentekcb/product/${product.id}`}
     key={product.id}
         className="max-w-lg bg-white border border-gray-200 rounded-lg"
        >
      <img
       className="rounded-t-lg mx-auto aspect-square w-full"

            
       src={product.product_image}
       alt="Product image"
      />
     <div
         className="p-8 dark:bg-gray-800 dark:border-gray-700"
         >
       
       <h5 className="text-xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
         {product.product_name}
       </h5>
       <div className="flex justify-between items-center text-start gap-3">
         <span className="text-3xl font-bold text-gray-900 dark:text-white">
           ${product.product_price},00
         </span>
         <Button
           className="text-white hover:bg-red-800
           font-medium rounded-lg text-sm px-5 py-2.5"
            variant={"destructive"}
           onClick={() => addToCart(setCart, cart, product.id as number)}
         >
           Add to cart
         </Button>
         {user?.role === "ADMIN" && (
           <Button onClick={() => deleteProduct(product.id as number)}>
             Delete Product
           </Button>
         )}
       </div>
     </div>
   </Link>

   )
}
