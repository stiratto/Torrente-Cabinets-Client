import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const localStorageToken = localStorage.getItem('user')
    if (localStorageToken) {
      const {token} = JSON.parse(localStorageToken)
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases here
    if (error.response?.status === 403) {
      // Handle unauthorized access
      localStorage.removeItem('user');
      window.location.href = '/torrentekcb/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance; 
