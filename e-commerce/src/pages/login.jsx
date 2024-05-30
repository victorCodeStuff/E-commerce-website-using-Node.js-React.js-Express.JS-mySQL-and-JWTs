import React from "react";
import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
  const loginUserName = event.target.elements.loginUserName.value;
  const loginUserPassword = event.target.elements.loginUserPassword.value;
  console.log(loginUserName + "\n" + loginUserPassword);

  const logRequest = {
    name: loginUserName,
    password: loginUserPassword,
  };

  axios.post("http://localhost:3000/login", logRequest).then((response) => {
    let token = response.data.token;
    console.log(response.data);
    console.log(token);
    document.cookie = `token=${token}`;
  });
}

const LoginPage = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" htmlFor="loginUserName" id="loginUserName"></input>
        <input
          type="password"
          htmlFor="loginUserPassword"
          id="loginUserPassword"
        ></input>
        <button type="submit">
          <p>Login</p>
        </button>
      </form>
    </>
  );
};
export default LoginPage;
