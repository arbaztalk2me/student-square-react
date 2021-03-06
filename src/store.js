import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore

const fbConfig = {
  apiKey: "AIzaSyAfTIsLt7dnqWqUXHv2MSyNcyjE_QOrHag",
  authDomain: "student-square-e624c.firebaseapp.com",
  projectId: "student-square-e624c",
  storageBucket: "student-square-e624c.appspot.com",
  messagingSenderId: "167970747700",
  appId: "1:167970747700:web:77cfac1ec37623bb1fe161",
  measurementId: "G-B4FTQXMEKX",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
