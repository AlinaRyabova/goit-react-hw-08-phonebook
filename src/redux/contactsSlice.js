import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const initialState = { items: [], isLoading: false, error: null };

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetchContacts();
    return response.data;
  }
);

export const addContactsAsync = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const response = await addContacts(contact);
    return response.data;
  }
);

export const deleteContactsAsync = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const response = await deleteContacts(id);
    return response.data;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsAsync.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteContactsAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      })
      .addMatcher(
        action =>
          action.type.endsWith('/pending') ||
          action.type.endsWith('/fulfilled') ||
          action.type.endsWith('/rejected'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
