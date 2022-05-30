// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ-q2wvJ8AjCLiDL2qb2bzdKzBbMGblKk",
  authDomain: "grp10-tp-ict202-c2bb7.firebaseapp.com",
  projectId: "grp10-tp-ict202-c2bb7",
  storageBucket: "grp10-tp-ict202-c2bb7.appspot.com",
  messagingSenderId: "613011735128",
  appId: "1:613011735128:web:c526fb117638b97567402d",
  measurementId: "G-Q025M0E2ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
