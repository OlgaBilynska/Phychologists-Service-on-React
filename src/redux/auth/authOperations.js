import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import { toastError } from 'redux/psychologists/psyOperations';
import 'react-toastify/dist/ReactToastify.css';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@firebase/auth';
import { auth, app } from '../../firebase';
import { googleAuthProvider } from '../../firebase';

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  console.log('get');
  try {
    const auth = getAuth(app);
    return auth;
  } catch (e) {
    toastError(`Oops! Something went wrong! ${e.response.data}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    console.log('register');
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        userData.name,
        userData.email,
        userData.password
      );
      return newUser;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUserByEmail = createAsyncThunk(
  'user/logInUserByEmail',
  async (userData, thunkAPI) => {
    console.log('log in');
    try {
      const loggedInUser = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return loggedInUser;
      //         .then(
      //     user => {
      //       console.log('cre', user);
      //     }
      //   );
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUserByGoogle = createAsyncThunk(
  'user/logInUserByGoogle',
  async (user, thunkAPI) => {
    console.log('google');
    try {
      const loggedInUser = await signInWithPopup(auth, googleAuthProvider);
      return loggedInUser;
      // .then(credentials => {
      //     setUser(credentials.user);
      //     if (onAuthStateChanged) {
      //         onAuthStateChanged(true);
      //     }
      // })
    } catch {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    console.log('log out');
    try {
      await signOut(auth);
      return;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
