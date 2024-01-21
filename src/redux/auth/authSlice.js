import { createSlice } from '@reduxjs/toolkit';
import {
  getUser,
  registerUser,
  logInUserByEmail,
  logInUserByGoogle,
  logOutUser,
} from './authOperations';

const initialAuthState = {
  userData: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,

  extraReducers: builder =>
    builder
      //GetUser
      .addCase(getUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Register
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Log in by email
      .addCase(logInUserByEmail.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logInUserByEmail.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInUserByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Log in by Google
      .addCase(logInUserByGoogle.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logInUserByGoogle.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInUserByGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Log out
      .addCase(logOutUser.fulfilled, state => {
        state.userData = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOutUser.pending, state => {
        state.isAuthenticated = false;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
