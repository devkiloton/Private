import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBAC16JnVlmGdazWPj2kBNVrwIwTG0oaf4",
  authDomain: "private-3dcb9.firebaseapp.com",
  projectId: "private-3dcb9",
  storageBucket: "private-3dcb9.appspot.com",
  messagingSenderId: "871767044700",
  appId: "1:871767044700:web:922f4462a1901f51286c99"
};

let app;

if(firebase.apps.length === 0)
{
  app = firebase.initializeApp(firebaseConfig);
}
else
{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export{db,auth};