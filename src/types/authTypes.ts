//src/types/authTypes.ts

export interface LoginData {
    credential: string;
    password: string;
  }

export interface LoginResponse {
  access_token: string;
  message: string;
  refresh_token: string;
}
  
export interface RegisterData {
    username: string;
    password: string;
    email: string;
  }

export interface RegisterResponse {
  access_token: string;
  message: string;
}
