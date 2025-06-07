// CartDropdown.js
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { CartProductCard } from "./CartProductCard";
import { useCartContext } from "@/context/cartContext";

const CartDropdown = () => {
  const {cart, setCart} = useCartContext()


  const calculateTotal = () => {
    return cart 
      .reduce((total, product) => {
        if (product) {
          const productPrice = parseFloat(product.product_price.toString()) || 0;
          const productQuantity = product.product_quantity || 0;
          return total + productPrice * productQuantity;
        }
        return total;
      }, 0)
      .toFixed(2); // Redondear a dos decimales
  };


  return (
    <Sheet>
      <div className="gap-2 items-center relative">
        <SheetTrigger
          className="flex gap-2 border p-4 rounded-full items-center relative "
        >
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="flex flex-col  gap-5 overflow-y-auto ">
          {cart?.map((product, index) => (
            <CartProductCard index={index} product={product}/>
          ))}
          <Button className="fixed bottom-3">Checkout</Button>
          <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
        </SheetContent>
        <div className="rounded-full w-5 h-5 bg-red-500 flex justify-center items-center absolute -translate-y-4 right-0 text-white text-xs">
          {cart.length}
        </div>
      </div>
    </Sheet>

  );
};

export default CartDropdown;
