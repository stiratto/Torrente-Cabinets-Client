// CartDropdown.js
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { productsApi } from "@/api";

const CartDropdown = () => {
  const [products, setProducts] = useState<
    Array<{ id: any; details: any; imageUrl: any }>
  >([]);

  const displayCartItems = async () => {
    // Get the actual content of localStorage.
    const storedItems = localStorage.getItem("products");
    const existingItems = storedItems ? JSON.parse(storedItems) : [];

    const productDetails = await Promise.all(
      existingItems.map(async (productId: any) => {
        try {
          if (!productId) {
            console.error("Product ID not defined:", productId);
            throw new Error("Product ID not defined");
          }

          const productData = await productsApi.getCartProducts(productId.id);

          return {
            id: productId,
            details: productData.length > 0 ? productData[0] : null,
            imageUrl: productId.imageUrl,
          };
        } catch (error) {
          console.error(`Error processing product ${productId}:`, error);
          return {
            id: productId,
            details: null,
          };
        }
      })
    );

    setProducts(productDetails);
  };

  // Calculate the total of all the products that are on the cart (including the quantity of how many products are of the same ID)

  const calculateTotal = () => {
    return products
      .reduce((total, product) => {
        if (product.details) {
          const productPrice = parseFloat(product.details.product_price) || 0;
          const productQuantity = parseInt(product.id.quantity) || 0;
          return total + productPrice * productQuantity;
        }
        return total;
      }, 0)
      .toFixed(2); // Redondear a dos decimales
  };

  useEffect(() => {
    displayCartItems();
  }, []);

  return (
    <Sheet>
      <div className="gap-2 items-center relative">
        <SheetTrigger
          className="flex gap-2 border p-4 rounded-full items-center relative "
          onClick={() => displayCartItems()}
        >
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="flex flex-col  gap-5 overflow-y-auto ">
          {products.map((product, index) => (
            <div key={index}>
              {product.id !== undefined && (
                <div className="flex items-center  gap-3  py-3">
                  <img
                    src={product.imageUrl}
                    alt="Product Image"
                    className="w-52 h-32 object-contain"
                  />
                  <div>
                    <p className="text-xs">Quantity: {product.id.quantity}</p>
                    <SheetHeader className="text-xl font-bold">
                      {product.details?.product_name}
                    </SheetHeader>
                    <p>${product.details?.product_price},00</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* <div className="flex items-center gap-3 border-y py-3">
            <img src="" alt="" className="w-32 h-32 object-center" />
            <div>
              <p className="text-xs">3</p>
              <p className="text-xs">Quantity: 444</p>
              <SheetHeader className="text-xl font-bold">pistola</SheetHeader>
              <p>$44,00</p>
            </div>
          </div> */}

          <Button className="fixed bottom-3">Checkout</Button>
          <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
        </SheetContent>
        <div className="rounded-full w-5 h-5 bg-red-500 flex justify-center items-center absolute -translate-y-4 right-0 text-white text-xs">
          {products.length}
        </div>
      </div>
    </Sheet>
  );
};

export default CartDropdown;
