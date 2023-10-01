// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  // apiKey: "AIzaSyB9phOBDjkXtJIrsufqfNM97_y35Aj03eQ",
  // authDomain: "expo-project-52c25.firebaseapp.com",
  // projectId: "expo-project-52c25",
  // storageBucket: "expo-project-52c25.appspot.com",
  // messagingSenderId: "461784901741",
  // appId: "1:461784901741:web:ecbd269304ab32089b7764",
  // measurementId: "G-TEYQ77L0DM"
// };
// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(firebaseApp);
// export const firebaseDB = getFirestore(firebaseApp);
// export const firebaseStorage = getStorage(firebaseApp);
// export default firebaseApp;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9phOBDjkXtJIrsufqfNM97_y35Aj03eQ",
  authDomain: "expo-project-52c25.firebaseapp.com",
  projectId: "expo-project-52c25",
  storageBucket: "expo-project-52c25.appspot.com",
  messagingSenderId: "461784901741",
  appId: "1:461784901741:web:ecbd269304ab32089b7764",
  measurementId: "G-TEYQ77L0DM"
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