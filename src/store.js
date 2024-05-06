import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReduser } from './redux/contacts/slice';
import { filterReducer } from './redux/filter/slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReduser,
    filter: filterReducer,
  },
});
