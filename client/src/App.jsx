import "./App.css";
import "./pages/css/navBarStyle.css";
import "./pages/css/multipleStyles.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
// Import individual pages as components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"
import ProductDetails from "./pages/productDetails";
import Product from "./pages/productpage";
import Create from "./pages/Create";
import Search from "./pages/Search";
// Import utils and libraries
import axios from "axios";
import Cookie from "js-cookie";
import React from "react";
import { useEffect } from "react";

// Global state variable to track user authentication status
let currentResponse = false;

// Function to verify user token with the server
async function getResponse() {
  const token = Cookie.get("token");
  // Update currentResponse based on server response for authentication
  currentResponse = await axios.post("http://localhost:3000/verifyToken", {
    token,
  });
}

function App() {
  let location = useLocation();
  getResponse();

  useEffect(() => {
    if (
      (location.pathname != "/login") &
      (location.pathname != "/createuser")
    ) {
      getResponse()
        .then((response) => {
          const userStatus = currentResponse.data;
          if (!userStatus) {
            window.location.replace("/login");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [location]);

  return (
    <>
      <Navbar>
        
      </Navbar>
      <div id="contentWrapper">
        <Routes>
          <Route
            path="/"
            element={
              currentResponse !== null ? (
                currentResponse ? (
                  <Home />
                ) : (
                  <Login />
                )
              ) : null
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createuser" element={<Create />}></Route>
          <Route path="/search/:searchKeyWord" element={<Search />}></Route>
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
