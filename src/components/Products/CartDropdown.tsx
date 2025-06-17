import { Frown, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { CartProductCard } from "./CartProductCard";
import { useCartContext } from "@/context/cartContext";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { productsApi } from "@/api";
import { CartProduct } from "@/lib/interfaces/Product.Interface";

const CartDropdown = () => {
  const { cart, setCart } = useCartContext()

  const calculateTotal = () => {
    return cart
      ?.reduce((total, product) => {
        if (product) {
          const productPrice = parseFloat(product.product_price.toString()) || 0;
          const productQuantity = product.product_quantity || 0;
          return total + productPrice * productQuantity;
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  const getCartProductsId = () => {
    const ids = cart.map((p) => p.id as number)

    const prevQuantities = cart.map((p => {
      return {
        id: p.id,
        prevQuantity: p.product_quantity
      }
    }))

    return { ids, prevQuantities: prevQuantities }
  }

  const getCartProducts = async () => {
    const { ids, prevQuantities } = getCartProductsId()
    const data = await productsApi.getCartProducts(ids)

    const updatedData = data.map((p) => {
      const match = prevQuantities.find((item) => p.id === item.id)
      if (match) {
        return {
          ...p,
          product_quantity: match.prevQuantity
        }
      }
      return p as CartProduct
    })
    setCart(updatedData)
  }

  useEffect(() => {
    getCartProducts()
  }, [])

  return (
    <Sheet>
      <div className="gap-2 items-center relative">
        <SheetTitle></SheetTitle>
        <SheetTrigger
          className="flex gap-2 border p-4 rounded-full items-center "
        >
          <ShoppingCart />
          <p className="rounded-full w-5 h-5 bg-red-500 flex justify-center items-center absolute bottom-0 right-0 text-white text-xs">
            {cart?.length}
          </p>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-5 overflow-y-hidden p-0 mb-96 ">
          <div className="w-full h-full p-5">
            <h1 className="text-5xl font-extrabold">Your cart ({cart.length})</h1>
            <ul className="overflow-y-auto h-[80vh] w-full flex flex-col items-start ">
              {cart && cart.length > 0 ? cart?.map((product, index) => (
                <CartProductCard index={index} product={product} key={index} />
              )) :
                <div className="flex flex-col gap-2">
                  <Frown size={30} />
                  <h1 className="font-bold text-2xl">You haven't added anything to your cart</h1>
                  <NavLink to="/torrentekcb/shop">
                    <Button className="bg-yellow-500 hover:bg-[#FFE505]">
                      Goto shop
                    </Button>
                  </NavLink>
                </div>
              }
            </ul>

          </div>

          <div className="bottom-0 sticky gap-2 p-4 bg-white text-black w-full">
            <p className="text-lg font-bold flex items-center justify-between">
              Subtotal: <span className="">${calculateTotal()}</span>
            </p>
            <Button className="bg-[#ffdd33]/40 text-black uppercase font-semibold w-full ">Checkout</Button>
          </div>
        </SheetContent>
      </div>
    </Sheet>

  );
};

export default CartDropdown;
