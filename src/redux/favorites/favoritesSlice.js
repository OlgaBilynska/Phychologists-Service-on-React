import { createSlice } from '@reduxjs/toolkit';
import {
  getFavorites,
  addToFavorites,
  deleteFromFavorites,
} from './favoritesOperations';

const favoriteInitialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: favoriteInitialState,

  extraReducers: builder =>
    builder
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = action.payload;
      })
      .addCase(getFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        const index = state.favorites.findIndex(
          favPsy => favPsy.id === action.payload.id
        );
        state.favorites.splice(index, 1);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(deleteFromFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const favoritesReducer = favoriteSlice.reducer;
