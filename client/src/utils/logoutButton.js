import Cookie from "js-cookie";

export function logoutButton() {
    /*
    To make a logout system you just need to remove the token
     */
    Cookie.remove("token");
    window.location.replace("/login");
  }