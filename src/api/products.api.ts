import axiosInstance from './axios.config';

interface Product {
  id?: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_quantity: number;
  product_image?: File;
}

export const productsApi = {
  getProducts: async () => {
    const response = await axiosInstance.get('/product/getProducts');
    return response.data;
  },

  getProductDetails: async (id: number) => {
    const response = await axiosInstance.get(`/getProductDetails/${id}`);
    return response.data;
  },

  getCartProducts: async (id: number) => {
    const response = await axiosInstance.get(`/getCartProducts/${id}`);
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