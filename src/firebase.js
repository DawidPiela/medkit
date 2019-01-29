import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC41UAUI_F_WXASca2U8-Q7Fz36GP_W3sE",
    authDomain: "medkit-react-app.firebaseapp.com",
    databaseURL: "https://medkit-react-app.firebaseio.com",
    projectId: "medkit-react-app",
    storageBucket: "medkit-react-app.appspot.com",
    messagingSenderId: "334684173758"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
