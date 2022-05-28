import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJtmafyBFie_aRyNrqqIuAU3TsJv1p_5g",
    authDomain: "eva-de-eva-f4c12.firebaseapp.com",
    projectId: "eva-de-eva-f4c12",
    storageBucket: "eva-de-eva-f4c12.appspot.com",
    messagingSenderId: "263888208734",
    appId: "1:263888208734:web:f2694401fe7ab81a9d85cf",
    measurementId: "G-CBDQVB7LDG"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();
const storageRef = firebase.storage().ref();
const providerFaceBook = new firebase.auth.FacebookAuthProvider();
export { firebase, database, provider, providerFaceBook, storageRef };
