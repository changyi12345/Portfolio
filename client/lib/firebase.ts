// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2P6umZ3qfEwHhkG-yNcfL1hfE6Mgt6b0",
  authDomain: "ecommerce-c02c2.firebaseapp.com",
  projectId: "ecommerce-c02c2",
  storageBucket: "ecommerce-c02c2.firebasestorage.app",
  messagingSenderId: "1043403458086",
  appId: "1:1043403458086:web:de67d0640bf678324088e7",
  measurementId: "G-N8YCY5V3CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only on client side and if supported)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
