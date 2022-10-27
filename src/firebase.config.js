import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9rUkyaaNn8vs3ZCTVDufXexvNkv3OT_g",
  authDomain: "restaurant-app-72d93.firebaseapp.com",
  databaseURL: "https://restaurant-app-72d93-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-72d93",
  storageBucket: "restaurant-app-72d93.appspot.com",
  messagingSenderId: "457470353746",
  appId: "1:457470353746:web:cdd61813dc54b8dd01da8b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
