import GotoHomeBtn from "@/components/AdminPage/GotoHomeBtn";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product_name, setProduct_name] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [product_price, setProduct_price] = useState("");
  const [product_quantity, setProduct_quantity] = useState("");

  const [product_image, setProduct_image] = useState<File | null>(null);
  const { toast } = useToast();

  const cardStyles = {
    formcontrol: "border p-3 rounded-lg ",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "product_name":
        setProduct_name(value);
        break;
      case "product_price":
        setProduct_price(value);
        break;
      case "product_description":
        setProduct_description(value);
        break;
      case "product_quantity":
        setProduct_quantity(value);
        break;
      // Add other cases if needed

      default:
        break;
    }
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_price", product_price);
    formData.append("product_description", product_description);
    formData.append("product_quantity", product_quantity);
    product_image && formData.append("product_image", product_image);

    await fetch(
      "https://jesus-torrente-cab-server.onrender.com/createProduct",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(() => {
        toast({
          variant: "default",
          title: "The product has been added succesfully.",
          action: (
            <ToastAction altText="Goto shop">
              <Link to={"/torrentekcb/shop"}>Goto shop</Link>
            </ToastAction>
          ),
        });
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: `There was a problem when adding the product, ${err}`,
          action: (
            <ToastAction altText="Goto schedule to undo">
              Try again.
            </ToastAction>
          ),
        });
      });
  };

  return (
    <div className="container main-container">
      <div className="flex flex-col gap-9">
        <form
          className="mt-5 mb-5 flex flex-col gap-9 items-start"
          onSubmit={onSubmit}
        >
          <GotoHomeBtn />
          <Toaster />

          <div className="form-group">
            <input
              type="text"
              className={cardStyles.formcontrol}
              id="productname"
              placeholder="Enter Product Name"
              name="product_name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className={cardStyles.formcontrol}
              id="price"
              placeholder="Product Price"
              name="product_price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex flex-col gap-2 text-start">
            <label htmlFor="image">Product Image:</label>
            <input
              type="file"
              className={cardStyles.formcontrol}
              id="image"
              name="product_image"
              onChange={(event) => {
                if (event.target.files && event.target.files.length > 0) {
                  setProduct_image(event.target.files[0]);
                }
              }}
            />
          </div>
          <div>
            <input
              type="number"
              className={cardStyles.formcontrol}
              placeholder="Product Quantity"
              name="product_quantity"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex flex-col text-start gap-4 w-full">
            <label className="text-xl">Product Description:</label>
            <textarea
              className={cardStyles.formcontrol}
              rows={5}
              id="productdesc"
              name="product_description"
              onChange={handleChange}
            ></textarea>
          </div>
          <Button type="submit" className="">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
