import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../type';
import productsApi from '../../api/products';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  status: 'idle',
  error: null,
};

export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await productsApi.fetchProducts();
    return response;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

export const fetchProductAsync = createAsyncThunk('products/fetchProduct', async (productId: number) => {
  try {
    const response = await productsApi.fetchProduct(productId);
    return response;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
});

export const createProductAsync = createAsyncThunk('products/createProduct', async (productData: any) => {
  try {
    const response = await productsApi.createProduct(productData);
    return response;
  } catch (error) {
    throw new Error('Failed to create product');
  }
});

export const updateProductAsync = createAsyncThunk('products/updateProduct', async ({ productId, productData }: { productId: number, productData: any }) => {
  try {
    const response = await productsApi.updateProduct(productId, productData);
    return response;
  } catch (error) {
    throw new Error('Failed to update product');
  }
});

export const deleteProductAsync = createAsyncThunk('products/deleteProduct', async (productId: number) => {
  try {
    await productsApi.deleteProduct(productId);
    return productId;
  } catch (error) {
    throw new Error('Failed to delete product');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products.push(action.payload);
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedProduct = action.payload;
        const index = state.products.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const deletedProductId = action.payload;
        state.products = state.products.filter(product => product.id !== deletedProductId);
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;

export default productsSlice.reducer;
