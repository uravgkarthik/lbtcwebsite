import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC-YzzdF8XkWTSsfb_3DE_henGZvn9P6zo",
    authDomain: "lbtc-website.firebaseapp.com",
    databaseURL: "https://lbtc-website.firebaseio.com",
    projectId: "lbtc-website",
    storageBucket: "lbtc-website.appspot.com",
    messagingSenderId: "808094427144",
    appId: "1:808094427144:web:8b506e3ce61aeb794589bd",
    measurementId: "G-E238X4JKE4"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore();