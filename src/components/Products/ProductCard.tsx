import { useCartContext } from "@/context/cartContext"
import { IProduct } from "@/lib/interfaces/Product.Interface"
import { addToCart } from "@/lib/utils"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Check } from "lucide-react"

export const ProductCard = ({ product }: {
  product: IProduct,
}) => {

  const { cart, setCart } = useCartContext()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/torrentekcb/product/${product.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer max-w-lg bg-white border border-gray-200 shadow-sm rounded-lg"
    >
      <img
        className="rounded-t-lg mx-auto object-cover w-full h-[300px]"
        src={product.product_image}
        alt="Product image"
      />
      <div className="p-8">
        <h3 className="text-2xl text-start uppercase font-extrabold">
          {product.product_name}
        </h3>
        <div className="flex flex-col  justify-between text-start gap-3 ">
          <p className="text-xl text-black ">
            Starts at <span className="font-bold">${product.product_price},0</span>
          </p>

          <Button
            className="rounded-none bg-transparent border-b border-[#FA1925] text-black hover:bg-none hover:bg-[#FA1925] hover:text-white uppercase font-medium text-sm px-5 py-2.5 w-min self-end"
            variant={"destructive"}
            onClick={(e) => {
              e.stopPropagation()
              addToCart(setCart, cart, product.id as number)
            }}
          >
            Add to cart
          </Button>
          <div className="flex flex-col text-sm gap-2">
            <p className="flex items-center gap-2"><Check size={20} className="bg-[#fa1925] rounded-full p-1" /> In Stock & Ready to Ship</p>
            <p className="flex items-center gap-2"><Check size={20} className="bg-[#FA1925] rounded-full p-1" /> Fast Shipping from U.S. Warehouse</p>
          </div>

        </div>
      </div>
    </div>
  )
}

