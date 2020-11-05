import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9i-JSPT8_0SDtxvK0leXWMWEtm_ioi5E",
  authDomain: "admin-virtual-fime.firebaseapp.com",
  databaseURL: "https://admin-virtual-fime.firebaseio.com",
  projectId: "admin-virtual-fime",
  storageBucket: "admin-virtual-fime.appspot.com",
  messagingSenderId: "759328172258",
  appId: "1:759328172258:web:2d59c526233a9d7065d6bb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;