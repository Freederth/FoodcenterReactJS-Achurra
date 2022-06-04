// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA4ScvhRluPLLAo_yLto5TymWdcujU06Gw",
	authDomain: "foodcenter-ccp.firebaseapp.com",
	databaseURL: "https://foodcenter-ccp.firebaseio.com",
	projectId: "foodcenter-ccp",
	storageBucket: "foodcenter-ccp.appspot.com",
	messagingSenderId: "508529781256",
	appId: "1:508529781256:web:6f11fdeb6d641ea5d47fbd",
	measurementId: "G-3T713G5V92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
