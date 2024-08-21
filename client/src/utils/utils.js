import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

export function getToken() {
  let newToken = Cookie.get("token");
  console.log(newToken);
}

export function logoutButton() {
  console.log("sdfdfsdf");
  Cookie.remove("token");
  window.location.replace("/login");
}
export function searchForProduct() {
  var inputValue = document.getElementById("navSearchInput").value;
  if (inputValue.length >= 1) {
    window.location.replace("/search/" + inputValue);
  }
}

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
        Redirecting();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
export default function redirectClick(event) {
  /* after you click on a displayed product you will redirect
  to his own page
  */
  const currentProduct = event.currentTarget;
  let productName = currentProduct.getAttribute("name");
  console.log(productName);


  window.location.replace(
    `/product/${currentProduct.id}/${productName}`
  );
   
}
