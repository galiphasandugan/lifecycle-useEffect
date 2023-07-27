import { useEffect, useState } from "react";



const User = () => {
  // let userData = "deneme"
  const [userData, setUserData] = useState("");


  const getUser = () => {

    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };

useEffect(() => {
const timer = setInterval(getUser,3000)
  getUser()

return(
    clearInterval(timer)
)

}, [])




  console.log(userData);

  return (
    <div>
      <img src={userData?.picture?.large} alt="" />
      <h4>  Hi My name is</h4>
      <h1>{userData?.name?.first}{userData?.name?.last}</h1>
      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("en-US")}</h4>
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6>

<button className="btn btn-success" onClick={getUser}>GET RANDOM USER</button>

    </div>
  );
};

export default User;
