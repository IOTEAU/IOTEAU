import *as firebase from "firebase"
// import * as admin from "firebase-admin"
var config = {
    apiKey: "AIzaSyB2_l8HIycLAdM6a9vA9XMaS_VPqxmBK1o",
    authDomain: "datacontro.firebaseapp.com",
    databaseURL: "https://datacontro.firebaseio.com",
    projectId: "datacontro",
    storageBucket: "datacontro.appspot.com",
    messagingSenderId: "585589132177"
}
firebase.initializeApp(config);

export var dbFirebase = firebase.database();
export var dbRef = firebase.database().ref()
export var firebaseAuth = firebase.auth
export var user = firebase.auth().currentUser;