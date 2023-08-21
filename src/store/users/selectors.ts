import { RootState } from '../type';

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectSelectedUser = (state: RootState) => state.users.selectedUser;
export const selectUserStatus = (state: RootState) => state.users.status;
export const selectUserError = (state: RootState) => state.users.error;
