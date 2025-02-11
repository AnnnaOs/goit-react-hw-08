import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
} from './operations';
import { logOutThunk } from '../auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  // editingContact: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(fetchContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items.push(payload);
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContactThunk.rejected, handleRejected)
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        const item = state.items.find(item => item.id === payload.id);
        item.name = payload.name;
        item.number = payload.number;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
