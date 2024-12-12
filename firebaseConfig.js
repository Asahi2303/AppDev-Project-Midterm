import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBRfa_TVmQ1qdWoIQ1EJPW0_P_dUdAhZYo",
  authDomain: "smartlock-5ee84.firebaseapp.com",
  projectId: "smartlock-5ee84",
  databaseURL: "https://smartlock-5ee84-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "smartlock-5ee84.firebasestorage.app",
  messagingSenderId: "345205099065",
  appId: "1:345205099065:web:1efebbd759ab7352e0dbe8",
  measurementId: "G-QWNKQ6GG6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

// Initialize Auth
const auth = getAuth(app);

// Set persistence using React Native AsyncStorage
setPersistence(auth, browserLocalPersistence)  // Use local persistence or sessionPersistence
  .then(() => {
    console.log('Persistence set');
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

export { app, auth, db, rtdb };
