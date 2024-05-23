import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbk9LLVDECleJSZb3ZCHfYGf9KkFHp37A",
  authDomain: "angular-pokeapi-a5445.firebaseapp.com",
  projectId: "angular-pokeapi-a5445",
  storageBucket: "angular-pokeapi-a5445.appspot.com",
  messagingSenderId: "193783081999",
  appId: "1:193783081999:web:1e2a1d281436c3cacec77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
