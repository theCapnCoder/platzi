import { AxiosInstance, AxiosResponse } from 'axios';
import apiClient from './apiClient';
import { Product } from '../store/products/type';

class ProductsApi {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = apiClient;
  }

  async fetchProducts(): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await this.apiClient.get('/products');
    return response.data;
  }

  async fetchProduct(productId: number): Promise<Product> {
    const response: AxiosResponse<Product> = await this.apiClient.get(`/products/${productId}`);
    return response.data;
  }

  async createProduct(productData: any): Promise<Product> {
    const response: AxiosResponse<Product> = await this.apiClient.post('/products', productData);
    return response.data;
  }

  async updateProduct(productId: number, productData: any): Promise<Product> {
    const response: AxiosResponse<Product> = await this.apiClient.put(`/products/${productId}`, productData);
    return response.data;
  }

  async deleteProduct(productId: number): Promise<boolean> {
    const response: AxiosResponse<boolean> = await this.apiClient.delete(`/products/${productId}`);
    return response.data;
  }
}

const productsApi = new ProductsApi();

export default productsApi;

