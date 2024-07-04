
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: "AIzaSyAXnoSJywJuyXNvu-_k4AquhDhmXVKUz40",
	authDomain: "evanto-v2.firebaseapp.com",
	projectId: "evanto-v2",
	storageBucket: "evanto-v2.appspot.com",
	messagingSenderId: "983148483018",
	appId: "1:983148483018:web:02f928886592546f6bbf33"
  };
  

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;