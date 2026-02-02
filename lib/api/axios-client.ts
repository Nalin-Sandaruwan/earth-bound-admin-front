// lib/api/axios-client.ts

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
// Create axios instance with default config
const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3006',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor - Handle 401 errors only
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    // Handle 401 - Redirect to login
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;