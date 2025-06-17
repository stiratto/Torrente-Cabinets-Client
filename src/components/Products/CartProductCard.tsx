import { CartProduct } from "@/lib/interfaces/Product.Interface"
import { Minus, Plus, Trash } from "lucide-react"
import { useCartContext } from "@/context/cartContext"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"



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
    <li className="flex flex-col items-start w-full">
      {product && (
        <div className="flex flex-col md:flex-row items-start gap-4 py-3 w-full" key={index}>
          <div className="relative flex flex-col w-full">
            <img
              src={product.product_image}
              alt="Product Image"
              className="w-72 h-52 object-cover rounded self-center"

            />

          </div>

          <div className="flex flex-col gap-2 w-full justify-between h-full">
            <h1 className="text-2xl font-bold flex items-center justify-between">
              {product.product_name}
              <button onClick={removeFromCart} className="w-min rounded-sm text-black hover:bg-gray-300 p-1"><Trash size={20} /></button>
            </h1>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xl font-medium"><span className="font-semibold">US${product.product_price},00</span> each</p>
              <div className="flex items-center gap-2 border">
                <Button
                  className="bg-white border-none rounded-none text-black hover:bg-gray-100"
                  disabled={product.product_quantity >= product.product_stock}
                  size={"sm"}
                  onClick={() => addOne(product.id as number)}
                >
                  <Plus />
                </Button>
                <span className="min-w-[3ch] text-center inline-block">{product.product_quantity}</span>


                <Button
                  className="bg-white border-none rounded-none text-black hover:bg-gray-100"
                  disabled={product.product_quantity === 1}
                  size={"sm"}
                  onClick={() => removeOne(product.id as number)}
                ><Minus /></Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Separator />
    </li>
  )
}
