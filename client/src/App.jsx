import './App.css'
import {Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import axios from"axios"
import Cookie from "js-cookie"
import React from 'react';
import { useNavigate } from 'react-router-dom';

let currentResponse = false;


async function getResponse(){

  const token = Cookie.get("token");
   currentResponse = await axios.post("http://localhost:3000/verifyToken", {
    token,
  });
}



function App() {
let location = useLocation()
const navigate = useNavigate();
React.useEffect(()=>{
  console.log("Route changed to:", location.pathname);
  if (location.pathname !== "/login"  ){
    
    
  
      try {
        getResponse()
        const userStatus = currentResponse
        console.log("userStatus", userStatus);
        if (userStatus.data) {
          console.log("User is logged", userStatus.data);
        }
        else  {
          console.log("sdfsdfsdf")
          navigate("/login")
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
  
   

}, [location])

  return (
    <>
           <nav>
             <ul>
               <li>
                 <Link to="./">
                  Home
                 </Link>
               </li>        
             </ul>
       
             <ul>
               <li>
                 <Link to="./login">
                  Login
                 </Link>
               </li>        
             </ul>
           </nav>
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/login" element={<Login/>}></Route>      
               <Route path="/dashboard" element={<Dashboard/>}sd></Route>
           </Routes>
    
        </>
  )
}

export default App