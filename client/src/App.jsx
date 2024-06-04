import './App.css'
import {BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App() {


  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
        </>
  )
}

export default App