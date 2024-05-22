import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  authLogoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsRefresh: (state) => state.isRefreshing,
    selectToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectUser: (state) => state.user,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectUser, selectToken, selectIsRefresh } =
  slice.selectors;
