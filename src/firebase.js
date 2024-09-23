import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4rd2Jawd8u0RbtqxB4aOCJwxaXoVI3B0",
  authDomain: "coreone-bd944.firebaseapp.com",
  projectId: "coreone-bd944",
  storageBucket: "coreone-bd944.appspot.com",
  messagingSenderId: "110589993668",
  appId: "1:110589993668:web:18502115c14c4a1d4a9f91",
  measurementId: "G-MBM3GKCS9Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
