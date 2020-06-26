import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { userRef } from "react";

const config = {
  apiKey: "AIzaSyAddsVOeTgsvH9oeaugdQmogMdGfLxls0M",
  authDomain: "crown-db-2f226.firebaseapp.com",
  databaseURL: "https://crown-db-2f226.firebaseio.com",
  projectId: "crown-db-2f226",
  storageBucket: "crown-db-2f226.appspot.com",
  messagingSenderId: "957958594653",
  appId: "1:957958594653:web:49ecf6772b80964bc76db4",
  measurementId: "G-0MKRD8FWFF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
