import './App.css';
import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useDispatch } from 'react-redux';
import { auth } from './Data/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setuser } from "./Redux/action";
import SingleProduct from './Pages/SingleProduct/SingleProduct';


function App() {
  let dispatch = useDispatch();

  useEffect(()=> {
    // onAuthStateChanged((authUser)=> {
    //   if(authUser){
    //     dispatch(setuser(authUser));
    //   }else {
    //     dispatch(setuser(null));
    //   }
    })
  return (
    <div className="App">
       <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/register" element= {<Register/>}/>
      <Route path="/product/:id" element= {<SingleProduct/>}/>
     </Routes>
    </div>
  );
}

export default App;
