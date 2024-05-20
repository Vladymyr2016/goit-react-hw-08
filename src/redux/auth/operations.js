import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ConectionsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await ConectionsApi.post('/users/signup', credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await ConectionsApi.post('/users/login', credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
