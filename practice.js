const firebaseConfig = {
  apiKey: "AIzaSyBfQ7V3vYZ8s6BNK1yvGcSf0iVBie5ChFE",
  authDomain: "c-94-8007f.firebaseapp.com",
  databaseURL: "https://c-94-8007f-default-rtdb.firebaseio.com",
  projectId: "c-94-8007f",
  storageBucket: "c-94-8007f.appspot.com",
  messagingSenderId: "620052480200",
  appId: "1:620052480200:web:702e010faf3956903be5fd",
  measurementId: "G-1MVGR6K85Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS

function addUser(){
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  })
}