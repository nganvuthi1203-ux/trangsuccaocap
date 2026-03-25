// Sử dụng CDN để chạy trực tiếp trên trình duyệt mà không cần cài đặt node_modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChm_CMuhECVgE3EU4jRU3Pnvk88Z4ra6w",
  authDomain: "flowershop-1203.firebaseapp.com",
  projectId: "flowershop-1203",
  storageBucket: "flowershop-1203.firebasestorage.app",
  messagingSenderId: "643121178343",
  appId: "1:643121178343:web:85caf8e8554330e408e442",
  measurementId: "G-V1411X10LY"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Xuất biến db để các file khác có thể dùng
export { db, collection, addDoc };