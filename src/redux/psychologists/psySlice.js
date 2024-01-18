import { createSlice } from '@reduxjs/toolkit';
import { getPshychologists, onPageChange } from './psyOperations';

const initialPsyState = {
  psychologists: [], //first 3
  page: 1,
  isLoading: false,
  error: null,
};

const psySlice = createSlice({
  name: 'psychologists',
  initialState: initialPsyState,

  extraReducers: builder =>
    builder
      .addCase(getPshychologists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.psychologists = action.payload;
      })
      .addCase(getPshychologists.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPshychologists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(onPageChange.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.page = state.page + 1;
        state.psychologists = [...state.psychologists, ...action.payload];
      })
      .addCase(onPageChange.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(onPageChange.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const psyReducer = psySlice.reducer;
