import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productsApi } from "@/api";
import { addToCart } from "@/lib/utils";
import { useCartContext } from "@/context/cartContext";
import { useUserContext } from "@/context/userContext";

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      product_name: "",
      product_description: "",
      product_price: 0,
      product_image: "",
      product_quantity: 0,
      imageUrl: "",
    },
  ]);

  const {cart, setCart} = useCartContext()

  const {user} = useUserContext()
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const data = await productsApi.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const deleteProduct = async (id: number) => {
    try {
      await productsApi.deleteProduct(id);
      console.log("Product deleted");
      // Refresh products list
      getProducts();
    } catch (err) {
      console.log("There was an error", err);
    }
  };



  return (
    <div className={products.length > 10 ? "h-auto flex flex-wrap flex-col md:flex-row items-center gap-8 p-8" : "h-screen  flex flex-wrap flex-col md:flex-row items-center gap-8 p-8"}>
      {isLoading && <Loader2Icon className="animate-spin mx-auto" />}
      {!isLoading &&
        products.map((product) => (
          <Link
            reloadDocument
            to={`/torrentekcb/product/${product.id}`}
            state={{ product }}
            key={product.id}
            className="p-8 container max-w-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="">
              <img
                className="rounded-t-lg mx-auto h-[121px]"
                src={product.imageUrl}
                alt="Product image"
              />
              <h5 className="text-xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.product_name}
              </h5>
              <div className="flex justify-between items-center text-start gap-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.product_price},00
                </span>
                <button
                  className="text-white bg-red-500 hover:bg-red-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium rounded-lg text-sm px-5 py-2.5 "
                  onClick={() => addToCart(setCart, cart, product.id)}
                >
                  Add to cart
                </button>
                {user?.role === "ADMIN" && (
                  <Button onClick={() => deleteProduct(product.id)}>
                    Delete Product
                  </Button>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Shop;
