import { processResponsive } from "@chakra-ui/react";
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "girl-anda-a-terapia.firebaseapp.com",
  projectId: "girl-anda-a-terapia",
  storageBucket: "girl-anda-a-terapia.appspot.com",
  messagingSenderId: "336120035841",
  appId: "1:336120035841:web:1f9caf8be272c155d99e00",
  measurementId: "G-D37YV0LEF3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
