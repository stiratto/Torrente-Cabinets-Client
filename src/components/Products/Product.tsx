import { productsApi } from "@/api"
import { IProduct } from "@/lib/interfaces/Product.Interface"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import { Check, ShoppingCart, X } from "lucide-react"
import { Separator } from "../ui/separator"
import { addToCart } from "@/lib/utils"
import { useToast } from "../ui/use-toast"
import { useCartContext } from "@/context/cartContext"

export const Product = () => {
  const [product, setProduct] = useState<IProduct>()
  const { cart, setCart } = useCartContext()

  const { toast } = useToast()

  const navigate = useNavigate()

  const { id } = useParams()

  const getProduct = async () => {
    const response = await productsApi.getProductDetails(parseInt(id as string))
    setProduct(response)
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    product
      ? (
        <div className="flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.product_name}</h1>
                </div>

                <div className="space-y-4">
                  <div className="text-4xl font-bold text-gray-900">${product.product_price.toLocaleString()}</div>

                  <div className="flex items-center space-x-2">
                    {product.product_stock > 0 ? (
                      <>
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-medium">In Stock ({product.product_stock} available)</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-red-600" />
                        <span className="text-red-600 font-medium">Out of Stock</span>
                      </>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{product.product_description}</p>
                </div>


                <Separator />

                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Button
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3"
                      disabled={product.product_stock === 0}
                      onClick={() => addToCart(setCart, cart, product.id as number)}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                  </div>

                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3"
                    disabled={product.product_stock === 0}
                    onClick={() => navigate("/torrentekcb/contact")}
                  >
                    Request Consultation
                  </Button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Our design experts are here to help you create the perfect kitchen solution.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Free design consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Professional installation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">5-year warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      :
      <div>
        "asd"
      </div>
  )
}
