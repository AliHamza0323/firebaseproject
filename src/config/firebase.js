// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANFdvTcFjj3Go1e9x6F_Ys4Oa0g6FUHrE",
  authDomain: "reactproject-7bb23.firebaseapp.com",
  projectId: "reactproject-7bb23",
  storageBucket: "reactproject-7bb23.appspot.com",
  messagingSenderId: "450215533301",
  appId: "1:450215533301:web:0e0b79cd0f2038a05143bc",
  measurementId: "G-SX9J1V85KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth=getAuth(app)


function signinuser(data){

  createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user singin howa',user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       alert(' Signin in error ! \n Enter valid email and atleast \n Enter 6 character of password',errorMessage)
      });
}



function loginuser(data){

  signInWithEmailAndPassword(auth, data.email, data.password)
  
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('login hogya',user)
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Plz! Enter valid email \n and password.',errorMessage)
    });
}

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('User Logout Successfully.',)
  }).catch((error) => {
    // An error happened.
    console.log('logout error', error)
  });
}

export{
    signinuser,loginuser,logout,auth
};