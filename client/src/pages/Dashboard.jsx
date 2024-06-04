import "../App.css";
const Dashboard = () => {
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
            <div id="logoutButton">logout</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
