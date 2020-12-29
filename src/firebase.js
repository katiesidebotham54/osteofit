import firebase from 'firebase/app'
import 'firebase/firestore';


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDrkdt7QHBG-f9McbdODrSNpK8X_2CaYp0",
    authDomain: "osteofitwebsite.firebaseapp.com",
    projectId: "osteofitwebsite",
    storageBucket: "osteofitwebsite.appspot.com",
    messagingSenderId: "656491094608",
    appId: "1:656491094608:web:94155624ecc78597122755"
});

var db = firebaseApp.firestore();

export { db };