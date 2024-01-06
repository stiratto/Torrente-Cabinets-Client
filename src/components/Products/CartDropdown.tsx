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

const CartDropdown = () => {
  const [products, setProducts] = useState<
    Array<{ id: any; details: any; imageUrl: any }>
  >([]);

  const displayCartItems = async () => {
    // Get the actual content of localStorage.
    const storedItems = localStorage.getItem("products");
    const existingItems = storedItems ? JSON.parse(storedItems) : [];

    const productDetails = await Promise.all(
      // Maps through existingItems (the localStorage content)
      existingItems.map(async (productId: any) => {
        try {
          // If there is not a product ID, throws an error.
          if (!productId) {
            console.error("ID del producto no definido:", productId);
            throw new Error("ID del producto no definido");
          }

          // console.log("Product ID:", productId);

          // Makes a request and gets the product with the corresponding ID
          const response = await fetch(
            `https://jesus-torrente-cab-server.onrender.com/getCartProducts/${productId.id}`
          );

          // If response goes bad, throws a new error with the productID.
          if (!response.ok) {
            console.error(
              `Error en la solicitud para el producto ${productId}: ${response.status}`
            );
            throw new Error(
              `Error en la solicitud para el producto ${productId}`
            );
          }

          // If response results well, stores the data that the response sent into a variable

          const productData = await response.json();

          // console.log("Product Data:", productData);

          return {
            id: productId,
            details: productData.length > 0 ? productData[0] : null,
            imageUrl: productId.imageUrl,
          };
        } catch (error) {
          console.error(`Error al procesar el producto ${productId}:`, error);

          // Handle the error and return an object with the product ID
          return {
            id: productId,
            details: null,
          };
        }
      })
    );

    setProducts(productDetails);

    // Do something with the product details, for example, display them on the console.
    // console.log("Detalles del carrito:", productDetails);
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
