import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJH04qgETetgrZRywK0Cw3WgeLrkkkEDg",
    authDomain: "vue-project-6f22f.firebaseapp.com",
    databaseURL: "https://vue-project-6f22f.firebaseio.com",
    projectId: "vue-project-6f22f",
    storageBucket: "",
    messagingSenderId: "257837451930"
};
const  firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();