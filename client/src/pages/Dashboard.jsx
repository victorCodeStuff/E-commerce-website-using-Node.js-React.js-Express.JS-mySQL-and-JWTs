import "../App.css";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios"
import { logoutButton } from "../utils/utils";


const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState()
 
  let acessToken = Cookie.get("token")
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/getuser",
          {
            params: {
              acessToken: acessToken
            },
          }
        );
        setCurrentUser(response.data);
      } catch (error) {
      }
    };

    fetchData();
  },);
  let user = currentUser
  
  
  return (
    <>
      <div id="dashboard">
        <div id="dashboardWrapper">
          <div id="userContainer">
            <div id="userPhotoSlide">a slide here</div>
            <div id="userNameContainer">user name</div>
          </div>
          <div id="userUtils">
            <div id="changeUserNameButton">change user name</div>
            <button id="logoutButton" onClick={logoutButton }>
            logout
</button><p>
            {user}
              </p>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
