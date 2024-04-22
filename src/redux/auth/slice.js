import createSlice from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: authSlice,
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
});
