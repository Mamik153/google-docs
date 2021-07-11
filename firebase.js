import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnYrp116EpJGpv1LHCBI9UvD2-r3HaAeA",
    authDomain: "docs-ccd0d.firebaseapp.com",
    projectId: "docs-ccd0d",
    storageBucket: "docs-ccd0d.appspot.com",
    messagingSenderId: "829443485423",
    appId: "1:829443485423:web:197df7b313659a001f351a"
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export { db }