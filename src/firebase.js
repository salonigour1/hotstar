import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCQ9tqtKVbi0IXRL84BsM1etJO97WPzSNQ',
  authDomain: 'hotstar-5a523.firebaseapp.com',
  projectId: 'hotstar-5a523',
  storageBucket: 'hotstar-5a523.appspot.com',
  messagingSenderId: '405536355039',
  appId: '1:405536355039:web:0f93d3385d2983e9ecaf6a',
  measurementId: 'G-0QQFBCWX7J',
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, db };
// export default db;
