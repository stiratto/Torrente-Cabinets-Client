import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { productsApi } from "@/api";
import { ProductCard } from "@/components/Products/ProductCard";
import { IProduct } from "@/lib/interfaces/Product.Interface";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const data = await productsApi.getProducts();
      console.log(data)
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const deleteProduct = async (id: number) => {
    try {
      await productsApi.deleteProduct(id);
      // Refresh products list
      getProducts();
    } catch (err) {
      console.log("There was an error", err);
    }
  };

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div 
      className={products && products.length > 10 ? 
        "h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 p-8"
        : "h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 p-8"}>
      {isLoading && <Loader2Icon className="animate-spin mx-auto" />}
      {!isLoading &&
        products && products.map((product) => (
          <ProductCard product={product} deleteProduct={deleteProduct}/>
        ))}
    </div>
  );
};

export default Shop;
