
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain:"x-profiles-d9562.firebaseapp.com",
    projectId: "x-profiles-d9562",
    storageBucket: "x-profiles-d9562.appspot.com",
    messagingSenderId: "154018326017",
    appId: "1:154018326017:web:b6f7d5ad062071cb650200",
    measurementId:"G-D2RCC93N17"
    };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    export{ storage };
