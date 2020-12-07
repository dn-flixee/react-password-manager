import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDlmb_JNueg2PJYmajzT_XjPrq1fjA8g1o",
  authDomain: "password-manager-v1.firebaseapp.com",
  databaseURL: "https://password-manager-v1.firebaseio.com",
  projectId: "password-manager-v1",
  storageBucket: "password-manager-v1.appspot.com",
  messagingSenderId: "643568378022",
  appId: "1:643568378022:web:214a3cae823ebde4091467",
  measurementId: "G-1748YZ9BF5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;
