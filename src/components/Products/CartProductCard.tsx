import { CartProduct } from "@/lib/interfaces/Product.Interface"
import { Minus, Plus, X } from "lucide-react"
import { useCartContext } from "@/context/cartContext"
import { Button } from "../ui/button"



export const CartProductCard = ({ index, product }: { index: number, product: CartProduct }) => {
  const { cart, setCart } = useCartContext()

  const removeFromCart = () => {
    const productToDelete = cart?.find((p) => p.id === product.id)

    if (!productToDelete) {
      console.log("Product not found")
      return
    }

    const updatedProducts = cart?.filter((p) => p?.id !== product.id)

    setCart(updatedProducts)
  }


  const addOne = (id: number) => {
    const product = cart.find((p) => p.id === id)

    const updatedCart = cart.map((p) =>
      p.id === product?.id ? { ...p, product_quantity: p.product_quantity + 1 } : p
    )

    setCart(updatedCart)
  }

  const removeOne = (id: number) => {

    const product = cart.find((p) => p.id === id)

    const updatedCart = cart.map((p) =>
      p.id === product?.id ? { ...p, product_quantity: p.product_quantity - 1 } : p
    )

    setCart(updatedCart)
  }


  return (
    <li className="flex flex-col items-center justify-center">
      {product && (
        <div className="flex flex-col items-left gap-3  py-3" key={index}>
          <div className="relative">
            <img
              src={product.product_image}
              alt="Product Image"
              className="w-52 h-32 object-cover rounded-lg"

            />  
            <button onClick={removeFromCart} className="w-min absolute -top-1 -right-1 bg-red-500 rounded-sm text-white"><X size={15}/></button>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              {product.product_name}
            </h1>
            <p className="font-bold text-2xl">${product.product_price},00</p>
            <div className="flex items-center gap-2">
              <Button variant={"default"}
                className="bg-white border border-gray-300 text-black hover:bg-gray-100"
                disabled={product.product_quantity >= product.product_stock}
                size={"sm"}
                onClick={() => addOne(product.id as number)}
              >
                <Plus />

              </Button>
              {product.product_quantity}
              <Button
                variant={"default"}
                className="bg-white border border-gray-300 text-black hover:bg-gray-100"
                disabled={product.product_quantity === 1}
                size={"sm"}
                onClick={() => removeOne(product.id as number)}
              ><Minus /></Button>
            </div>

          </div>
        </div>
      )}
    </li>
  )
}
