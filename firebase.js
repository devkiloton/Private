import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuJgvAaJRcseKW5QXAiX9uU4iT6GpvwJ4",
  authDomain: "private-e1f66.firebaseapp.com",
  projectId: "private-e1f66",
  storageBucket: "private-e1f66.appspot.com",
  messagingSenderId: "142369020036",
  appId: "1:142369020036:web:46424c8b39da8522e64ad1"
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