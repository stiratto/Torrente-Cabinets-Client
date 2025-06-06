import axiosInstance from './axios.config';

interface PaginationParams {
  skip?: number;
  take?: number;
}

export const adminApi = {
  getRegisteredUsers: async (params?: PaginationParams) => {
    const response = await axiosInstance.get('/admin/user/getRegisteredUsers', { params });
    return response.data;
  },

  getDealerRequests: async () => {
    const response = await axiosInstance.get('/admin/dealer/dealerRequests');
    return response.data;
  },

  getAdmins: async () => {
    const response = await axiosInstance.get('/admin/user/getAdmins');
    return response.data;
  },

 filterUsersByRole: async (role: string) => {
    const response = await axiosInstance.get(`/admin/user/filterUsersByRole/${role}`);
    return response.data;
  },

  getSpecificUser: async (id: string) => {
    const response = await axiosInstance.get(`/admin/user/getSpecificId/${id}`);
    return response.data;
  },

  getPaginatedUsers: async ({ skip, take = 5 }: PaginationParams) => {
    const response = await axiosInstance.get('/admin/user/pagination', {
      params: { skip, take }
    });
    return response.data;
  },
  acceptRequest: async (userId: string, requestId: string) => {
    const response = await axiosInstance.put('/admin/dealer/acceptRequest', {
      userId,
      id: requestId
    });
    return response.data;
  },

  denyRequest: async (requestId: string) => {
    const response = await axiosInstance.delete('/admin/dealer/denieRequest', {
      data: { id: requestId }
    });
    return response.data;
  }
}; 