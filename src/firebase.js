import { processResponsive } from "@chakra-ui/react";
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "lichigrams.firebaseapp.com",
  projectId: "lichigrams",
  storageBucket: "lichigrams.appspot.com",
  messagingSenderId: "751118918399",
  appId: "1:751118918399:web:f634525c63ed40d8de62ca",
  measurementId: "G-FGEYWV6GWR",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
