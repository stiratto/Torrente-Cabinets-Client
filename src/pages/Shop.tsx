import { useEffect, useState } from "react";
import { Check, Loader2Icon } from "lucide-react";
import { productsApi } from "@/api";
import { ProductCard } from "@/components/Products/ProductCard";
import { IProduct } from "@/lib/interfaces/Product.Interface";
import { Separator } from "@/components/ui/separator";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const data = await productsApi.getProducts();
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
      className="lg:p-8 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center  lg:justify-evenly">
        <img src="https://images.unsplash.com/photo-1596205250168-c3583813eea0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="lg:max-w-2xl lg:rounded-3xl object-cover" />
        <div className="flex flex-col lg:max-w-xl text-start gap-4 px-4 w-full">
          <h1 className="text-4xl font-extrabold max-w-lg text-start">Wooden, Quartz cabinets and much more!</h1>
          <div className="bg-[#ffdd33]/10 p-4 rounded-xl space-y-4">

            <h2 className="flex flex-col">
              Premium cabinets. No showroom markup.
              <span>Get custom-look cabinets shipped to your door—without the retail price tag.</span>
            </h2>
            <Separator className="my-4 bg-gray-300" />
            <h3 className="flex flex-row gap-2">
              <Check size={18} className="p-1 bg-black/50]" />
              <div>
                <span className="flex items-center gap-2">Built to last</span>
                <span>Made from durable solid wood and crafted to withstand everyday use.</span>
              </div>
            </h3>
            <h3 className="flex flex-row gap-2">
              <Check size={18} className="p-1 bg-black/50]" />
              <div>
                <span className="flex items-center gap-2">Risk-free guarantee</span>
                <span>30-day returns. No hassle, no restocking fees.</span>
              </div>
            </h3>
            <h3 className="flex flex-row gap-2">
              <Check size={18} className="p-1 bg-black/50]" />
              <div>
                <span className="flex items-center gap-2">Made for real kitchens</span>
                <span>Soft-close hinges, full-extension drawers, and moisture-resistant finishes.</span>
              </div>
            </h3>




          </div>

        </div>
      </div>
      <div
        className={products && products.length > 1 ?
          "h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 p-8"
          : "h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 p-8"}
      >
        {isLoading && <Loader2Icon className="animate-spin mx-auto" />}
        {!isLoading &&
          products && products.map((product) => (
            <ProductCard product={product} deleteProduct={deleteProduct} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
