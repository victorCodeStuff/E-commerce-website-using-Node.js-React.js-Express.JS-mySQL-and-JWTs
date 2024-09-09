import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { logoutButton } from "../utils/logoutButton";
import { searchForProduct } from "../utils/productSearch.js";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] =
  useState(false); // Tracks whether the menu is open or closed.
const [isMobile, setIsMobile] = useState(
  window.innerWidth < 990
); // Determines if the screen width is less than 990px (mobile view).

useEffect(() => {
  const handleResize = () => {
    // Updates mobile view state when the window is resized.
    setIsMobile(window.innerWidth < 990);
  };
  // Adds a listener for window resizing.
  window.addEventListener("resize", handleResize);
}, []); // Runs the effect once when the component mounts.

const changeNav = () => {
  setIsMenuOpen(!isMenuOpen);
};

const navStyle = {
  display: isMenuOpen ? "flex" : isMobile ? "none" : "flex",// Shows menu in mobile or regular view based on its state.
  flexDirection: isMobile ? (isMenuOpen ? "column-reverse" : "none") : "row",
  alignItems: isMobile? (isMenuOpen? "center":"center"):"center"

};
const buttonStyle = { display: isMenuOpen ? "flex" : isMobile ? "flex" : "none"};

   return (<>
    <nav style={{
      justifyContent: isMobile ?(isMenuOpen?"space-evenly":"") :"",
      bottom : isMobile ? "0":"0",
      width: isMobile?(isMenuOpen ?"80vw" :"80vw"): "",
      height: isMobile?(isMenuOpen? "fit-content":""): "5vh",
      flexDirection: isMobile?(isMenuOpen? "column-reverse":""): "row",
    }}>
        <ul style={navStyle} id="principalRoutes">
          <li>
            <Link to="./">Home</Link>
          </li>

          <li>
            <Link to="./product">Products</Link>
          </li>
        </ul>
        <div id="searchWrapper">
          <button onClick={searchForProduct}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            id="navSearchInput"
            placeholder="search for something"
            type="text"
          ></input>
        </div>
        
        <ul style={navStyle}  id="userIcons">
           <button onClick={logoutButton}>LOGOUT</button>
           
        </ul>
        
        <button id="navButtonMobile" 
        style={buttonStyle}
        onClick={changeNav}
        >
          <div></div>
          <div></div>
          <div></div>  
        </button>
          
        
      </nav>
    </>)
  }
  
  export default NavBar;