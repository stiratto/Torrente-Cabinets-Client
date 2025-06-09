import { useCartContext } from "@/context/cartContext"
import { useUserContext } from "@/context/userContext"
import { IProduct } from "@/lib/interfaces/Product.Interface"
import { addToCart } from "@/lib/utils"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

export const ProductCard = ({ product, deleteProduct }: {
  product: IProduct,
  deleteProduct: (id: number) => void
}) => {

  const { cart, setCart } = useCartContext()
  const { user } = useUserContext()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/torrentekcb/product/${product.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer max-w-lg bg-white border border-gray-200 rounded-lg"
    >
      <img
        className="rounded-t-lg mx-auto aspect-square w-full"
        src={product.product_image}
        alt="Product image"
      />
      <div className="p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.product_name}
        </h5>
        <div className="grid grid-cols-1  justify-between items-center text-start gap-3">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.product_price},00
          </span>
          <Button
            className="text-white hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 w-min"
            variant={"destructive"}
            onClick={(e) => {
              e.stopPropagation()
              addToCart(setCart, cart, product.id as number)
            }}
          >
            Add to cart
          </Button>
          {user?.role === "ADMIN" && (
            <Button
              onClick={(e) => {
                e.stopPropagation()
                deleteProduct(product.id as number)
              }}
              className="w-min"
            >
              Delete Product
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

