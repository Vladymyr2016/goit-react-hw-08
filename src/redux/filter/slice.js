import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    filters: {
      name: '',
    },
  },
  reducers: {
    filterContact: (state, action) => {
      state.filters.name = action.payload;
    },
  },
  selectors: {
    selectFilter: (state) => {
      return state.filters.name;
    },
  },
});

export const filterReducer = slice.reducer;
export const { filterContact } = slice.actions;
export const { selectFilter } = slice.selectors;
