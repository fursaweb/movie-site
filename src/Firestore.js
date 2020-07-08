import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBhxUuGlkaIR4hSL7Ks3sNcAB1OmiUwI-Y',
    authDomain: 'moviesite-27b21.firebaseapp.com',
    databaseURL: 'https://moviesite-27b21.firebaseio.com',
    projectId: 'moviesite-27b21',
    storageBucket: 'moviesite-27b21.appspot.com',
    messagingSenderId: '584403749955',
    appId: '1:584403749955:web:2f4b1cc30724eb1604d8f6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
