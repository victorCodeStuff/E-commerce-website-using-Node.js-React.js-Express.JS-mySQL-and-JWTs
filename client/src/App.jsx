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
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/dashboard" &&
      location.pathname !== "/createuser"
    ) {
      try {
        getResponse();
        var userStatus = currentResponse;
        if (userStatus.data === false || undefined) {
          userStatus = false;
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, [location]);

  function searchForProduct() {
    var inputValue = document.getElementById("navSearchInput").value;
    if (inputValue.length >= 1) {
      navigate("/search/" + inputValue);
    }
  }
  return (
    <>
      <nav>
        <ul id="principalRoutes">
          <li>
            <Link to="./">Home</Link>
          </li>

          <li>
            <Link to="./product">Products</Link>
          </li>
        </ul>
        <div id="shopName">
          <h1>VICTOR</h1>
          <p>E-ECOMMERCE</p>
        </div>
        <div id="searchWrapper">
          <div id="navSearchInputWrapper">
            <button onClick={searchForProduct}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              id="navSearchInput"
              placeholder="search for something"
              type="text"
            ></input>
          </div>
        </div>
        <ul id="userIcons">
          <li id="userIconUser">
            <FontAwesomeIcon icon={faUser} />
            <div>asdasda adasdasd</div>
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
          <Route path="/search/:searchKeyWord" element={<Search />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route
            path="/product/:productId/:productName"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
