import { createAsyncThunk } from '@reduxjs/toolkit';
import { async } from 'q';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebase.js';
import { ref} from 'firebase/database';

export const toastError = text => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const getPshychologists = createAsyncThunk(
  'psy/getPsy',
  async (_, thunkAPI) => {
    try {
      const psychologistsRef = ref(db, 'psycologists');
      console.log('pR', psychologistsRef);
      return psychologistsRef;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const onPageChange = createAsyncThunk(
  'psy/loadMore',
  async (page, thunkAPI) => {
    try {
      page = page + 1;
    } catch {
      toast.error("We couldn't load more psychologists. Try again.");
    }
  }
);
