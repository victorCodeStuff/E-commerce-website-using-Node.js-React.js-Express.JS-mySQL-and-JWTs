import axios from "axios";
import Cookie from "js-cookie";
import {  useNavigate } from "react-router-dom";
// getting the Cookie value

export function getToken() {
  let newToken = Cookie.get("token");
  console.log(newToken);
}

const Redirecting = () => {
  const navigate = useNavigate();
  function redirect  (){
    navigate("/login");
    
  }
  console.log("dd")
redirect()
};

export async function verifyToken() {

  const token = Cookie.get("token");
  if (token) {
    try {
      const response = await axios.post("http://localhost:3000/verifyToken", {
        token,
      });
      const userStatus = response.data;
      console.log("userStatus", userStatus);
      if (userStatus) {
        console.log("User is logged");
        Redirecting()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
