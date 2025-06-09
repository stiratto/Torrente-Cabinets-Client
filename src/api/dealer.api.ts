import axiosInstance from './axios.config';

interface DealerRequest {
  name: string;
  company_email: string;
  companyvendor_name: string;
  ein: string;
  company_address: string;
  phone_number: string;
  personal_email: string;
  company_description: string;
  userId: number;
}

export const dealerApi = {
  submitDealerRequest: async (dealerData: DealerRequest) => {
    const response = await axiosInstance.post('/user/dealerForm', dealerData);
    return response.data;
  },

}; 
