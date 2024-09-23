import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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

const storage = getStorage();

// Reference to the image in Firebase Storage
const imageRef = ref(storage, "path/to/your/image.jpg");

// Get the download URL
getDownloadURL(imageRef)
  .then((url) => {
    // Insert the image into an <img> element dynamically
    const img = document.getElementById("categoryImage");
    img.src = url;
  })
  .catch((error) => {
    console.error("Error fetching image URL:", error);
  });
