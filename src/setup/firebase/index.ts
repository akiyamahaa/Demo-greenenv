import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADkFNIZPmgd33I2FdZs2hOzqAKWDskIE0",
  authDomain: "greenenv2.firebaseapp.com",
  projectId: "greenenv2",
  storageBucket: "greenenv2.appspot.com",
  messagingSenderId: "742418834153",
  appId: "1:742418834153:web:a08fa2272c7fb8d5e3c678",
  measurementId: "G-Z3K0DRS74Q"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const colRefUsers = collection(firebaseDB, "users");
export const colRefMissions = collection(firebaseDB, "missions");
export const colRefPresents = collection(firebaseDB, "presents");
export const colRefMessages = collection(firebaseDB, "messages");
// export const colRefMessengerCount = collection(firebaseDB, "messengerCount");
export const colRefMessageCount = collection(firebaseDB, "messageCount");
export const colRefUserMission = collection(firebaseDB, "UserMission");
export default firebaseApp;