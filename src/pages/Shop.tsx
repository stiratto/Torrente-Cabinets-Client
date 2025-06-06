import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productsApi } from "@/api";

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

  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
  });

  const token = localStorage.getItem("token");
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

  const addToCart = async (id: number) => {
    try {
      const productDetails = await productsApi.getProductDetails(id);

      const storedItems = localStorage.getItem("products");
      const existingItems = storedItems ? JSON.parse(storedItems) : [];

      // Verify if the product is on the cart.
      const existingProductIndex = existingItems.findIndex(
        (item: any) => item.id === id
      );

      if (existingProductIndex !== -1) {
        // If the product is already on the cart, increase the quantity.
        existingItems[existingProductIndex].quantity += 1;
      } else {
        console.log(productDetails.url);
        // If the product is not on the cart, add it with the quantity of 1.
        existingItems.push({
          id,
          quantity: 1,
          imageUrl: productDetails.url,
        });
      }

      // Store the updated list on localStoerage
      localStorage.setItem("products", JSON.stringify(existingItems));
      console.log(`Product ${id} added to cart.`);
    } catch (error) {
      console.error(`Error adding product ${id} to cart:`, error);
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

  useEffect(() => {
    getProducts();
    const parseJwt = (token: any) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    const user = parseJwt(token);
    setUserInfo(user);
  }, []);

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
              <a href="#">
                <h5 className="text-xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.product_name}
                </h5>
              </a>
              <div className="flex justify-between items-center text-start gap-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.product_price},00
                </span>
                <button
                  className="text-white bg-red-500 hover:bg-red-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium rounded-lg text-sm px-5 py-2.5 "
                  onClick={() => addToCart(product.id)}
                >
                  Add to cart
                </button>
                {userInfo?.role === "ADMIN" && (
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
