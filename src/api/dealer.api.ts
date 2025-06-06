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
  userId: string;
}

export const dealerApi = {
  submitDealerRequest: async (dealerData: DealerRequest) => {
    const response = await axiosInstance.post('/dealerForm', dealerData);
    return response.data;
  },

}; 