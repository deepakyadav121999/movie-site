import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./Store/HomeScreen";
import FullDeatils from "./Pages/FullDeatils";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ActionTypes } from './Store/constants/action-types';
import {auth} from './firebase';
import {setuser} from './Store/actions/userAction'
const App = () => {
  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch(ActionTypes.SET_USER)


  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth)=>{
     
      if(userAuth){
 
        dispatch(setuser(true))
        }
        else{
         dispatch(setuser(false))
        }
    
  
  })
    console.log(user)
  },[user])
  return (

    <BrowserRouter>
    {user? <Routes>
     <Route path="/"  element={ <HomeScreen/>}/>
      <Route path="/login"  element={  <HomeScreen/>}/>
      <Route path="/signup"  element={ <HomeScreen/>}/>
      <Route path="/details/:movieID"  element={ <FullDeatils/>}/>
    </Routes> :
    <Routes>
      <Route path="/"  element={ <Login/>}/>
      <Route path="/login"  element={ <Login/>}/>
      <Route path="/signup"  element={<SignUp/>}/>
      <Route path="/details/:movieID"  element={ <Login/>}/>
    </Routes>
    }
  
      </BrowserRouter>
  );
};

export default App;
