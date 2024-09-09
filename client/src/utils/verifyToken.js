import axios from "axios";
import Cookie from "js-cookie";

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