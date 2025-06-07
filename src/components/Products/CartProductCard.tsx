import { CartProduct } from "@/lib/interfaces/Product.Interface"
import { SheetHeader } from "../ui/sheet"
import { X } from "lucide-react"
import { useCartContext } from "@/context/cartContext"



export const CartProductCard = ({index, product}: {index: number, product: CartProduct}) => {
  const {cart, setCart} = useCartContext()

  const removeFromCart = () => {
    const productToDelete = cart?.find((p) => p.id === product.id)

    if (!productToDelete) {
      console.log("Product not found")
    }

    const updatedProducts = cart.filter((p) => p.id !== product.id)

    setCart(updatedProducts)
  }

   return (
      <div key={index}>
        {product.id !== undefined && (
          <div className="flex items-center  gap-3  py-3">
            <img
              src={product.image_url}
              alt="Product Image"
              className="w-52 h-32 object-contain rounded-2xl"
            />
            <div>
              <p className="text-xs">Quantity: {product.product_quantity}</p>
              <SheetHeader className="text-xl font-bold">
                {product.product_name}
              </SheetHeader>
              <p>${product.product_price},00</p>
              <button onClick={removeFromCart}><X/></button>
               
            </div>
          </div>
        )}
      </div>
   )
}
