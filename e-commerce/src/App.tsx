import './App.css'
import {BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home';
import LoginPage from './pages/login';

function App() {


  return (
    <>
    <BrowserRouter>
           <nav>
             <ul>
               <li>
                 <Link to="./">
                  Home Page
                 </Link>
               </li>        
             </ul>
       
             <ul>
               <li>
                 <Link to="./loginpage">
                  Login Page
                 </Link>
               </li>        
             </ul>
       
       
           </nav>
           <Routes>
               <Route path="/" element={<HomePage/>}></Route>
               <Route path="/loginpage" element={<LoginPage/>}></Route>      
           </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
