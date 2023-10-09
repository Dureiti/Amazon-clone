import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBjhQj-DR0A0lvgvyIH3w6A80WoFoHPxpo",
	authDomain: "project-207b1.firebaseapp.com",
	projectId: "project-207b1",
	storageBucket: "project-207b1.appspot.com",
	messagingSenderId: "714115973068",
	appId: "1:714115973068:web:1cf68af04751e2244c6769",
	measurementId: "G-FBK0EJ63MY",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
