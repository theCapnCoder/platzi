import { AxiosInstance, AxiosResponse } from 'axios';
import apiClient from './apiClient';
import { Category } from '../store/categories/type';
import { Product } from '../store/products/type';

class ApiService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = apiClient;
  }

  async fetchCategories(): Promise<Category[]> {
    const response: AxiosResponse<Category[]> = await this.apiClient.get('/categories');
    return response.data;
  }

  async fetchCategory(id: number): Promise<Category> {
    const response: AxiosResponse<Category> = await this.apiClient.get(`/categories/${id}`);
    return response.data;
  }

  async createCategory(categoryData: Category): Promise<Category> {
    const response: AxiosResponse<Category> = await this.apiClient.post('/categories', categoryData);
    return response.data;
  }

  async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
    const response: AxiosResponse<Category> = await this.apiClient.put(`/categories/${id}`, categoryData);
    return response.data;
  }

  async deleteCategory(id: number): Promise<boolean> {
    const response: AxiosResponse<boolean> = await this.apiClient.delete(`/categories/${id}`);
    return response.data;
  }

  async fetchProductsByCategory(categoryId: number): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await this.apiClient.get(`/categories/${categoryId}/products`);
    return response.data;
  }
}

const categoriesApi = new ApiService();

export default categoriesApi;