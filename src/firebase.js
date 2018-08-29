import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import { config } from "./config";

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
