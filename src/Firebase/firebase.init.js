// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJAQOKEBdufqoSloxpSrivMOVicMc-2UQ",
    authDomain: "jwt-test-f26a0.firebaseapp.com",
    projectId: "jwt-test-f26a0",
    storageBucket: "jwt-test-f26a0.appspot.com",
    messagingSenderId: "66055046283",
    appId: "1:66055046283:web:a0556e5185f2023d9e808e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth