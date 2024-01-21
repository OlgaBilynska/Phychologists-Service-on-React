// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBU4qg5O9osiestHflSvgxAs7ezEMOURuw',
  authDomain: 'psychologistsservice.firebaseapp.com',
  databaseURL:
    'https://psychologistsservice-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psychologistsservice',
  storageBucket: 'psychologistsservice.appspot.com',
  messagingSenderId: '528389251216',
  appId: '1:528389251216:web:62f4714da53dc6d6e0b815',
  measurementId: 'G-2PF1089SHW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
