import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrqZeYIBo0HZUMxfWjJ8A_xaFPTF9tShE",
  authDomain: "finance-c07da.firebaseapp.com",
  projectId: "finance-c07da",
  storageBucket: "finance-c07da.firebasestorage.app",
  messagingSenderId: "173572209073",
  appId: "1:173572209073:web:9407b090270814550c6590",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
