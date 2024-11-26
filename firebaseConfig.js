// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,initializeAuth,getReactNativePersistence,} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhuW5EZQvKCUtd6EuYZ3_-KCXeKA2YRSA",
  authDomain: "g7firebaseintegration.firebaseapp.com",
  projectId: "g7firebaseintegration",
  databaseURL: "https://g7firebaseintegration-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "g7firebaseintegration.appspot.com",
  messagingSenderId: "166789276840",
  appId: "1:166789276840:web:acd665a6b73100e4e58e9d",
  measurementId: "G-T8E0PGPLKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
export { app, auth };