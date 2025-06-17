import {z} from "zod"

const validateInputNumber = (val: string) => {
   return Number(val)
}
export const AddProductSchema = z.object({
   product_name: z.string({message: "El nombre del producto es requerido"}).min(1, {message: "El nombre del producto es requerido"}),
   product_price: z.string().min(1).transform(validateInputNumber),
   product_description: z.string().min(1),
   product_stock: z.string().min(1).transform(validateInputNumber),
   product_image: z
   .instanceof(File, {message: "You must select an image"}).nullable()
   .refine((val) => val instanceof File, {message: "You must select an image"})
})

export type TAddProductSchema = z.infer<typeof AddProductSchema>
