import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child("Notes");