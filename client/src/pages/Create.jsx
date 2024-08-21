
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    function handleNewUser (event)  {
        event.preventDefault();
        var userNameCreation = event.target.elements.userNameCreation.value;
        var passwordUserCreation = event.target.elements.passwordUserCreation.value;
        var emailUserCreation = event.target.elements.emailUserCreation.value;
        console.log(passwordUserCreation , emailUserCreation, userNameCreation);

        const userCreationReq = {
            name: userNameCreation,
            password: passwordUserCreation,
            email:emailUserCreation
        }

axios.post("http://localhost:3000/createuser", userCreationReq).then((response) => {
    let userId = response.data;
  
    console.log(userId)
    if (userId){
        navigate("/login")
    }   
  });
}
  return (<>
  <form onSubmit={handleNewUser}>
    <input htmlFor="userNameCreation" placeholder="NAME" id="userNameCreation"></input>
    <input htmlFor="passwordUserCreation" placeholder="PASSWORD" id="passwordUserCreation"></input>
    <input htmlFor="emailUserCreation" placeholder="EMAIL" id="emailUserCreation"></input>
    <button type="submit"></button>
  </form>
  </>);
}

export default Create;