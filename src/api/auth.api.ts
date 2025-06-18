import axiosInstance from './axios.config';

interface User {
  name: string;
  password: string;
  confirm_password?: string;
}

export const authApi = {
  login: async (credentials: Omit<User, 'confirm_password'>) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData: User) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  }
}; 
