import { Frown, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { CartProductCard } from "./CartProductCard";
import { useCartContext } from "@/context/cartContext";
import { NavLink } from "react-router-dom";

const CartDropdown = () => {
  const { cart } = useCartContext()


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

  return (
    <Sheet>
      <div className="gap-2 items-center relative">
        <SheetTrigger
          className="flex gap-2 border p-4 rounded-full items-center relative "
        >
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="flex flex-col  gap-5 overflow-y-auto w-full">
          <ul className="overflow-y-auto h-full w-full flex flex-col items-start justify-center">
              {cart && cart.length > 0 ? cart?.map((product, index) => (
                <CartProductCard index={index} product={product} key={index}/>
              )) : 
              <div className="flex flex-col gap-2">
                  <Frown size={30}/>
                <h1 className="font-bold text-2xl">You haven't added anything to your cart</h1>
                <NavLink to="/torrentekcb/shop">
                  <Button className="bg-yellow-500 hover:bg-[#FFE505]">
                    Goto shop
                  </Button>
                </NavLink>
              </div>
            }                                                                      
          </ul>
          <div className="flex-col md:flex-row items-center gap-2 p-2">
            <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
            <Button className="">Checkout</Button>
          </div>
        </SheetContent>
        <p className="rounded-full w-5 h-5 bg-red-500 flex justify-center items-center absolute -translate-y-4 right-0 text-white text-xs">
          {cart?.length ?? 0}
        </p>
      </div>
    </Sheet>

  );
};

export default CartDropdown;
