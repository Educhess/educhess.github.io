import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getFirestore, doc , setDoc, getDoc} from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// const firebaseConfig = {
//     apiKey : process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID,
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBKnGjXT6FDqqkf39UVYgx5q89fZE_NYns",
  authDomain: "educhess-ab46e.firebaseapp.com",
  projectId: "educhess-ab46e",
  storageBucket: "educhess-ab46e.appspot.com",
  messagingSenderId: "387520426981",
  appId: "1:387520426981:web:976a2aadf979e22301f50c",
  measurementId: "G-7XBGDVHCDT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const addUserToDatabase = async (user, password, name) => {
/**
 * 
 * setDoc(doc(<databaseConnection>, <CollectionName>, <documentId>), {
 *    field1: value1,
 *    field2: value2,
 *    .....
 *    fieldn: valuen
 * })
 * 
 * 
 */
  return await setDoc(doc(db, "users", user), {
    user,
    password,
    name
  });
};


export const getUserById = async (user) => {
  /**
   * reference = doc(<databaseConnection>, <collectionName>, <documentId>)
   * 
   * getDoc(reference)
   */
  const userRef = doc(db, "users", user);
  const getUser = await getDoc(userRef);

  if(getUser.exists()) {
    console.log(getUser.data());
  } else {
    console.log("No user found");
  }
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}



// UID -> profile with UID