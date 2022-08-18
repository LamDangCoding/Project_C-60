import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAEw5LOvThegNwcMop_26Lu0ZTgj4nf3VU",
  authDomain: "attendance-app-58c16.firebaseapp.com",
  databaseURL: "https://attendance-app-58c16-default-rtdb.firebaseio.com",
  projectId: "attendance-app-58c16",
  storageBucket: "attendance-app-58c16.appspot.com",
  messagingSenderId: "592822293556",
  appId: "1:592822293556:web:ce4671ca90a6c190bc2661"
};

firebase.initializeApp(firebaseConfig)
export const db = app.database();