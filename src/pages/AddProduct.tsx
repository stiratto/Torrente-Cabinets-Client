import GotoHomeBtn from "@/components/AdminPage/GotoHomeBtn";
import {zodResolver} from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";
import { FormItem, Form, FormMessage, FormField, FormControl, FormLabel } from "@/components/ui/form";
import { productsApi } from "@/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddProductSchema, TAddProductSchema } from "@/schemas/add_product_schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

const AddProduct = () => {
  const { toast } = useToast();
  const form = useForm<TAddProductSchema>({
    resolver: zodResolver(AddProductSchema)
  })
 
  const removeImage = () => {
    form.setValue("product_image", null as unknown as File)
  }

  const onSubmit: SubmitHandler<TAddProductSchema> = async (data, ev: any) => {
    ev.preventDefault();

    const formData = new FormData();

    formData.append("product_name", data.product_name);
    formData.append("product_price", data.product_price.toString());
    formData.append("product_description", data.product_description);
    formData.append("product_stock", data.product_stock.toString());
    data.product_image && formData.append("product_image", data.product_image);
    
   
    await productsApi.createProduct(formData)
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
            <ToastAction altText="Retry">
              Try again.
            </ToastAction>
          ),
        });
      });
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-9">
        <Form
          {...form}
        >
          <form className="mt-5 mb-5 flex flex-col gap-9 items-start w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <GotoHomeBtn />
            <Toaster />

            <div className="flex flex-col gap-4 w-full">
              
              <FormField name="product_name" render={({field}) => (
                <FormItem className=" flex flex-col items-start max-w-xl">
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl> 
                </FormItem>
              )}/> 

              <FormField name="product_price" render={({field}) => (
                <FormItem className="flex flex-col items-start max-w-xl">
                  <FormLabel>Product price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter product price" {...field} />
                  </FormControl> 
                </FormItem>
              )}/>

              <FormField  name="product_stock" render={({field}) => (
                <FormItem className="flex flex-col items-start max-w-xl">
                  <FormLabel >Product stock</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter product stock" {...field}/>
                  </FormControl> 
                </FormItem>
              )}/>


              
              <FormField  name="product_description" render={({field}) => (
                <FormItem className=" flex flex-col items-start max-w-xl">
                  <FormLabel >Product description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter product description"  rows={10} {...field}/>
                  </FormControl> 
                </FormItem>
              )}/>


              <div className="relative w-max">
                {form.watch("product_image") && (
                  <div className="flex">
                    <img src={URL.createObjectURL(form.getValues("product_image"))} className="w-48 h-48 rounded-xl"/>
                    <button className="bg-red-500 p-1 rounded-full absolute -top-2 -right-2 text-white hover:bg-red-600" type="button" onClick={removeImage}>
                      <X size={15}/>

                    </button>
                  </div>
                )} 
              </div>
              <FormField  name="product_image" render={({field}) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormMessage/>
                  <FormLabel className="w-full">
                    <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e6e4db] px-6 py-14">
                      <div className="flex max-w-[480px] flex-col items-center gap-2">
                        <p className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Upload Product Image</p>
                        <p className="text-[#181711] text-sm font-normal leading-normal max-w-[480px] text-center">Click to upload or drag and drop</p>
                      </div>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" className="hidden" onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        form.setValue("product_image", file)
                      }
                    }}/>
                  </FormControl> 
                </FormItem>
              )}/>
             
              

           
            
            </div>
            <Button type="submit" className="rounded-full bg-[#ffdd33] text-black font-bold self-end">
              Add product 
            </Button>

          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
