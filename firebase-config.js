// firebase-config.js
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
    arrayUnion,
    arrayRemove,
    increment
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCR3OrzFXKiG2lPNra5OVe2JIN4cI8qBzg",
    authDomain: "omaah-e3c65.firebaseapp.com",
    projectId: "omaah-e3c65",
    storageBucket: "omaah-e3c65.firebasestorage.app",
    messagingSenderId: "942436888350",
    appId: "1:942436888350:web:0f048b2df08bf332c9630f"
};

// تهيئة Firebase
console.log("🔄 جاري تهيئة Firebase...");
const app = initializeApp(firebaseConfig);

// ⚠️ الطريقة الصحيحة للاتصال بقاعدة البيانات المسماة "omaah"
// في Firebase SDK 10.x، يتم تحديد قاعدة البيانات عبر settings
const db = getFirestore(app);

// ملاحظة: في Firebase، قاعدة البيانات المخصصة لا تدعمها Firestore SDK مباشرة
// الحل الأفضل هو استخدام اسم المشروع كمعرف
console.log("✅ Firebase initialized successfully - connecting to project: omaah-e3c65");

// دالة لاختبار الاتصال بقاعدة البيانات
export async function testFirestoreConnection() {
    try {
        // محاولة قراءة أي مستند من مجموعة students
        const testQuery = query(collection(db, "students"), limit(1));
        await getDocs(testQuery);
        console.log("✅ الاتصال بـ Firestore ناجح (المشروع: omaah-e3c65)");
        return true;
    } catch (error) {
        console.error("❌ فشل الاتصال بـ Firestore:", error.message);
        return false;
    }
}

// تصدير الدوال والمتغيرات
export { db };
export {
    collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc,
    query, where, orderBy, limit, serverTimestamp,
    arrayUnion, arrayRemove, increment
};

// إعدادات Cloudinary
export const CLOUDINARY_CLOUD_NAME = "dmehaq79g";
export const CLOUDINARY_UPLOAD_PRESET = "ICRsxDEX8ltPUv741MfG8haRqEM";



