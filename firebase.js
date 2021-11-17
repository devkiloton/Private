import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkeBT9dc3hEp6HIofDvkhvYp7fLBpb6DQ",
  authDomain: "private-b6e5b.firebaseapp.com",
  projectId: "private-b6e5b",
  storageBucket: "private-b6e5b.appspot.com",
  messagingSenderId: "247598576563",
  appId: "1:247598576563:web:cd7bfd2e4f4758e91f51c6"
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