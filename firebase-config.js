import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    onSnapshot,
    arrayUnion,
    arrayRemove,
    increment
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCR3OrzFXKiG2lPNra5OVe2JIN4cI8qBzg",
    authDomain: "omaah-e3c65.firebaseapp.com",
    projectId: "omaah-e3c65",
    storageBucket: "omaah-e3c65.firebasestorage.app",
    messagingSenderId: "942436888350",
    appId: "1:942436888350:web:0f048b2df08bf332c9630f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export {
    collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc,
    query, where, orderBy, limit, serverTimestamp, onSnapshot,
    arrayUnion, arrayRemove, increment
};

export const SITE_SETTINGS_REF = doc(db, "site_settings", "main");
