import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchData } from './contactsOps';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'phoneBook',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== payload
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.isLoading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },

  selectors: {
    selectPhoneBook: (state) => {
      return state.contacts.items;
    },
    selectIsLoading: (state) => {
      return state.isLoading;
    },
    selectIsError: (state) => {
      return state.isError;
    },
  },
});

export const phoneBookReduser = slice.reducer;
export const { removeContact, isLoading, isError, dataFetched } = slice.actions;
export const { selectPhoneBook, selectIsError, selectIsLoading } =
  slice.selectors;
