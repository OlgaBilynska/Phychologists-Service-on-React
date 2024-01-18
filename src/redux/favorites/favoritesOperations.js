import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError } from '../psychologists/psyOperations';

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async (_, thunkAPI) => {
    try {
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async (psychologist, thunkAPI) => {
    try {
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'favorites/deleteFromFavorites',
  async (psychologistId, thunkAPI) => {
    try {
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
