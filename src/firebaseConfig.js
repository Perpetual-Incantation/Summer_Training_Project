import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdG6DrjbmQhpEu8831_ERWDCt3Dx5u1X4",
  authDomain: "sheyjobs-73cab.firebaseapp.com",
  projectId: "sheyjobs-73cab",
  storageBucket: "sheyjobs-73cab.appspot.com",
  messagingSenderId: "55207457595",
  appId: "1:55207457595:web:36133c48a1f2dd8dc67d1e",
  measurementId: "G-HBERQMC6YS"
};


export const app = initializeApp(firebaseConfig);
export const fireDB= getFirestore(app);