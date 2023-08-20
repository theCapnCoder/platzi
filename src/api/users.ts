import { AxiosInstance, AxiosResponse } from 'axios';
import apiClient from './apiClient'; // Adjust the path

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  password: string;
  avatar: string;
}

interface CheckEmailResponse {
  isAvailable: boolean;
}

class ApiService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = apiClient;
  }

  async fetchUsers(): Promise<User[]> {
    const response: AxiosResponse<User[]> = await this.apiClient.get('/users');
    return response.data;
  }

  async fetchUser(id: number): Promise<User> {
    const response: AxiosResponse<User> = await this.apiClient.get(`/users/${id}`);
    return response.data;
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const response: AxiosResponse<User> = await this.apiClient.post('/users', userData);
    return response.data;
  }

  async updateUser(id: number, updatedData: Partial<User>): Promise<User> {
    const response: AxiosResponse<User> = await this.apiClient.put(`/users/${id}`, updatedData);
    return response.data;
  }

  async checkEmail(email: string): Promise<CheckEmailResponse> {
    const response: AxiosResponse<CheckEmailResponse> = await this.apiClient.post('/users/is-available', { email });
    return response.data;
  }
}

const userApi = new ApiService();

export default userApi;
