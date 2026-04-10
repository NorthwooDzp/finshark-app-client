import axios, { type AxiosInstance } from 'axios';
import type { CompanySearch } from './models';
const apiUrl: string = import.meta.env.VITE_FINMOD_API_URL;
const apiKey: string = import.meta.env.VITE_FINMOD_API_KEY;

const apiClient: AxiosInstance = axios.create({
  baseURL: apiUrl,
});

apiClient.interceptors.request.use((config) => {
  if (!config.params) {
    config.params = {};
  }
  config.params = { ...config.params, apikey: apiKey };

  return config;
});

export const searchCompanies = async (query: string): Promise<CompanySearch[]> => {
  try {
    const { data } = await apiClient.get<CompanySearch[]>(`/search-name`, {
      params: {
        query,
      },
    });
    return data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.message);
    }
    throw new Error('Failed to load search results...', { cause: err });
  }
  return [];
};
