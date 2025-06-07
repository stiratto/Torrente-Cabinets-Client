import { IProduct } from '@/lib/interfaces/Product.Interface';
import axiosInstance from './axios.config';


export const productsApi = {
  getProducts: async () => {
    const response = await axiosInstance.get('/product/getProducts');
    return response.data;
  },

  getProductDetails: async (id: number): Promise<IProduct> => {
    const response = await axiosInstance.get(`/product/getProductDetails/${id}`);
    return response.data;
  },

  getCartProducts: async (id: number) => {
    const response = await axiosInstance.get(`/product/getCartProducts/${id}`);
    return response.data;
  },

  createProduct: async (productData: FormData) => {
    const response = await axiosInstance.post('/admin/product/createProduct', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteProduct: async (id: number) => {
    const response = await axiosInstance.delete(`/admin/product/deleteProduct/${id}`);
    return response.data;
  },
}; 
