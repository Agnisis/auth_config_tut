import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBiRfrrAuOaaJSDUx_JKwyxefMwP1bU1aw",
  authDomain: "react-auth-357c6.firebaseapp.com",
  projectId: "react-auth-357c6",
  storageBucket: "react-auth-357c6.appspot.com",
  messagingSenderId: "40143678464",
  appId: "1:40143678464:web:012357f0cbdd4d0f553ce5",
  measurementId: "G-L50SMH6FGW"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
