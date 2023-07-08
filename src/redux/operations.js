import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://64a703e6096b3f0fcc80fa9a.mockapi.io/contacts/';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/contacts');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
