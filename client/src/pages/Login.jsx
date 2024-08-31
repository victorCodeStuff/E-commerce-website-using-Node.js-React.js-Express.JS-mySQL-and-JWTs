import axios from "axios";
import "./css/forms.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const loginUserName = event.target.elements.loginUserName.value;
    const loginUserPassword = event.target.elements.loginUserPassword.value;
    const logRequest = {
      name: loginUserName,
      password: loginUserPassword,
    };

    axios.post("http://localhost:3000/login", logRequest).then((response) => {
      let token = response.data.token;
      
      document.cookie = `token=${token}`;
      //if the user was authenticated he will be redirected
      if(token !== undefined){
      navigate("/dashboard");
   
      }
    });
  }

  return (
    <>
  <div className="userForm">
  <form  onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          placeholder="NAME"
          type="text"
          htmlFor="loginUserName"
          id="loginUserName"
        ></input>

        <label>Password</label>
        <input
          type="password"
          htmlFor="loginUserPassword"
          id="loginUserPassword"
          placeholder="PASSWORD"
        ></input>
        <button type="submit">
          <p>Login</p>
        </button>
      </form>
      <Link to="/createuser">
      Not a user?
      </Link>
  </div>
    
    </>
  );
}
