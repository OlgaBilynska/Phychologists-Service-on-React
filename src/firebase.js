import { initializeApp } from '@firebase/app';
import { GoogleAuthProvider, getAuth } from '@firebase/auth';
import { getDatabase } from '@firebase/database';

export const fireBaseConfig = {
  apiKey: 'AIzaSyBU4qg5O9osiestHflSvgxAs7ezEMOURuw',
  authDomain: 'psychologistsservice.firebaseapp.com',
  databaseURL:
    'https://psychologistsservice-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psychologistsservice',
  storageBucket: 'psychologistsservice.appspot.com',
  messagingSenderId: '528389251216',
  appId: '1:528389251216:web:9ed73bceaa0704a7e0b815',
  measurementId: 'G-W4HSX9E1T1',
};

export const app = initializeApp(fireBaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
