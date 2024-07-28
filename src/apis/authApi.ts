//src/apis/authApi.ts

import { LoginData, LoginResponse, RegisterData, RegisterResponse } from "@/types/authTypes";
import apiClient from "@/utils/api_client/apiClient";
import ApiError from "@/utils/error_handling/ApiError";

export const login = async (data: LoginData) => {
  try {
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new ApiError(response.status, response.data.message); // Throw ApiError with status and message
    }
  } catch (error) {
    console.error('LOGIN error:', error); // Add error logging
    throw error; // Still re-throw for global error handling (optional)
  }
};

export const register = async (data: RegisterData) => {
  try {
    const response = await apiClient.post<RegisterResponse>('/auth/register', data);
    return response.data;
  } catch (error) {
    console.error('REGISTER error:', error); // Add error logging
    throw error; // Re-throw the error for handling in RegisterPage (if applicable)
  }
};
