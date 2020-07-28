import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBhxUuGlkaIR4hSL7Ks3sNcAB1OmiUwI-Y',
    authDomain: 'moviesite-27b21.firebaseapp.com',
    databaseURL: 'https://moviesite-27b21.firebaseio.com',
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
export const functionFirebase = firebase.funtions;
