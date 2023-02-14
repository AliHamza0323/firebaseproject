import './App.css';
import {
  Routes, Route
} from "react-router-dom";
import Login from './screen/login'
import Singup from './screen/singup'
import { auth } from './config/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import Dashboard from './screen/dashboard'



function App() {

  const[userData,setuserData]=useState()

  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
    setuserData(user)
    // ...
  } else {
    // User is signed out
    setuserData(null)
    // ...

  }
});

  return <>
 {
  userData ?  <Dashboard/> : <div>
<Routes>
          <Route path='/' element={<Singup />} />
          <Route path='/Login'  element={<Login />} />
   </Routes>
  </div>
 }
  </> 
  ;
}

export default App;
