import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from '../auth/operations';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(`Contact ${data.name} added!`);
      return data;
    } catch (error) {
      toast.error('Error adding contact');
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/editContact',
  async (body, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;
    if (savedToken === null) {
      return rejectWithValue('token does not exist');
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await axios.patch(`/contacts/${body.id}`, body.values);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
