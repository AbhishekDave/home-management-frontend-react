// src/utils/api_client/apiClient.ts

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const get = async (url: string) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.error('API GET error:', error); // Add error logging
    throw error;
    // Handle errors centrally
  }
};

export const post = async (url: string, data: any) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API POST error:', error); // Add error logging
    throw error;
    // Handle errors centrally
  }
};

// Similar methods for put and delete

export default apiClient;  // Optional, for direct use of the base axios instance

