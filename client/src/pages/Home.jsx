import { verifyToken } from "../utils/utils";
function Home () {
  function test(){
    verifyToken()
  }
  return (

    <>
    <h1>
        HOME PAGE
        <button onClick={test}>
        </button>
    </h1></>
  );
}

export default Home