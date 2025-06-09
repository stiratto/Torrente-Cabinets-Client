export interface CartProduct extends IProduct {
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
