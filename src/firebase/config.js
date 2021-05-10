import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATsMCL24uodXs2NBXnQtEM6CKts-0itRw",
    authDomain: "fir-site-a7516.firebaseapp.com",
    projectId: "fir-site-a7516",
    storageBucket: "fir-site-a7516.appspot.com",
    messagingSenderId: "377908297789",
    appId: "1:377908297789:web:a614cebd062beec4242a54"
};


// Init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore , projectAuth, timestamp}