import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxKcHrY1Ax_Tyl48x94h4DvDodGR9oGD4",
  authDomain: "test--sign-in-d2b76.firebaseapp.com",
  projectId: "test--sign-in-d2b76",
  storageBucket: "test--sign-in-d2b76.appspot.com",
  messagingSenderId: "467154423553",
  appId: "1:467154423553:web:9259c93e25ba889104d500"
};

export function initFirebaseApp() {
  console.log("init firebase app!");
  initializeApp(firebaseConfig);
}
