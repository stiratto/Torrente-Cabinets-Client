import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jesus-torrente-cab-server.onrender.com/getProducts"
      );
      if (!response.ok) {
        console.error("Failed to fetch product data");
        return;
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = async (id: number) => {
    try {
      // Get details of the product, including the image URL.
      const response = await fetch(
        `https://jesus-torrente-cab-server.onrender.com/getProductDetails/${id}`
      );
      const productDetails = await response.json();

      // Get the actual content of localStorage.
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

      console.log(`Producto ${id} agregado al carrito.`);
    } catch (error) {
      console.error(`Error al agregar el producto ${id} al carrito:`, error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      const response = await fetch(
        `https://jesus-torrente-cab-server.onrender.com/deleteProduct/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Product deleted");
      } else {
        console.log("There was an error deleting the product");
      }
    } catch (err) {
      console.log("There was an error", err);
    }
  };

  const token = localStorage.getItem("token");

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
    <div className="flex flex-wrap flex-col md:flex-row items-center gap-8 p-8">
      {isLoading && <Loader2Icon className="animate-spin mx-auto" />}
      {!isLoading &&
        products.map((product) => (
          <div
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
          </div>
        ))}
    </div>
  );
  // ...
};

export default Shop;
