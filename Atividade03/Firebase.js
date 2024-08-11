import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBlsq3fSVlyLJytLwBr5sINplAAIw4-o84',
  authDomain: 'atividade03-c55b9.firebaseapp.com',
  projectId: 'atividade03-c55b9',
  storageBucket: 'atividade03-c55b9.appspot.com',
  messagingSenderId: '936802411070',
  appId: '1:936802411070:web:128e9f49d1461d336e276f',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
