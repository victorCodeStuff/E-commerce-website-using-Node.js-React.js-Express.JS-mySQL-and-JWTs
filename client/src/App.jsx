import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/productDetails";
import Product from "./pages/productpage";
import Create from "./pages/Create";
import AboutMe from "./pages/AboutMe";
import Search from "./pages/Search";
import axios from "axios";
import Cookie from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


let currentResponse = true;
async function getResponse() {
  const token = Cookie.get("token");
  currentResponse = await axios.post("http://localhost:3000/verifyToken", {
    token,
  });
}

function App() {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
 
    let currentToken = Cookie.get("token");
    console.log("Route changed to:", location.pathname);
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/dashboard" &&
      location.pathname !== "/createuser"
    ) {
      try {
        getResponse()
   
        var userStatus = currentResponse;
        console.log("userStatus", userStatus.data);
        if (userStatus.data) {
          console.log(userStatus.data);
        
        } else if (!(currentToken)) {
          console.log("sdfsdfsdf");
          userStatus = false;
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, [location]);

  

  return (
    <>
      <nav>
        <ul id="principalRoutes">
          <li>
            <Link to="./">home</Link>
          </li>

          <li>
            <Link to="./product">about me</Link>
          </li>
        </ul>
        <div id="shopName">
          <h1>VICTOR</h1>
          <p>E-ECOMMERCE</p>
        </div>
        <div id="searchWrapper">
        <div id="navSearchInput">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input placeholder="search for something" type="text"></input>
        </div>
        </div>
        <ul id="userIcons">
          <li id="userIconCart">
            <FontAwesomeIcon icon={faCartShopping} />
            
          </li>
          <li id="userIconUser">
            <FontAwesomeIcon icon={faUser} />
            <div>
            asdasda
            adasdasd
            </div>
          </li>
        </ul>
      </nav>
      <div id="contentWrapper">

      <Routes>
        <Route
          path="/"
          element={currentResponse ? <Home /> : <Login />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createuser" element={<Create />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:productId/:productName" element={<ProductDetails/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
