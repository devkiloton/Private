import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  xxxxxxx
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