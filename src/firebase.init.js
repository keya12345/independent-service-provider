// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA87d4N66lNX8f-34Bxk8bIiT3Nm8nJzuU",
  authDomain: "independent-service-prov-e8dfe.firebaseapp.com",
  projectId: "independent-service-prov-e8dfe",
  storageBucket: "independent-service-prov-e8dfe.appspot.com",
  messagingSenderId: "552806053976",
  appId: "1:552806053976:web:cd766a22227f536798f22d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
