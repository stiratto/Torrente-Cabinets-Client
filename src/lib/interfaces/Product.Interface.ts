export interface CartProduct extends IProduct {
  image_url: string;
  product_quantity: number;
}

export interface IProduct {
  id?: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_stock: number;
  product_image?: string;
}
