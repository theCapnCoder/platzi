import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../../api/users';
import { addNotification } from '../../notifications/notificationsSlice';
import { generateUniqueId } from '../../../utils/common';

export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async (_, { dispatch }) => {
    try {
      const users = await userApi.fetchUsers();
      console.log('enter async')
      dispatch(addNotification({ id: generateUniqueId(), type: 'success', message: 'Users fetched' }));

      return users;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  });
