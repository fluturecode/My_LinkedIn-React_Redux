import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyByrX-SqFQODBVRz_RZDzYuNey65UBvLi4",
	authDomain: "linkedin-17c77.firebaseapp.com",
	projectId: "linkedin-17c77",
	storageBucket: "linkedin-17c77.appspot.com",
	messagingSenderId: "815461595299",
	appId: "1:815461595299:web:d98bc94c24a6113ffa6716",
	measurementId: "G-FTX9F02SEC",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
