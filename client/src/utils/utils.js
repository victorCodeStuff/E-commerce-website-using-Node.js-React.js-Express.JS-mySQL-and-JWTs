import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
// getting the Cookie value
export function getToken() {
  let newToken = Cookie.get("token");
  console.log(newToken);
}

function RedirectToLogin(){
  const navigate = useNavigate();
  const redirect = ()=>{
    navigate("/login")
  }
  redirect()
}

export function verifyToken() {
  
  const token =  Cookie.get("token")
  if (token) {
    axios.post("http://localhost:3000/verifyToken",  {token: token}).then((response) => {
         const userStatus = response.data;  
          console.log("userStatus", userStatus);
            if(userStatus){
              console.log("User is logged")
              RedirectToLogin();
            }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
      
  }
}
