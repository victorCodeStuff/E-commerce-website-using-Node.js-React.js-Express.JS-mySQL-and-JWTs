import axios from "axios";
import Cookie from "js-cookie";

// getting the Cookie value
export function getToken() {
  let newToken = Cookie.get("token");
  console.log(newToken);
}
export function verifyToken() {
  function getJWT() {
    return Cookie.get("token");
  }
  axios
    .get("/verifytoken", {
      headers: {
        Cookie: `token=${getJWT()}`,
      },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

