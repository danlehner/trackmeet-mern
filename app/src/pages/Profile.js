import React, { useEffect, useState } from "react"; 
// import ProfileModel from "../models/ProfileModel"

// import { useRecoilState } from "recoil"; 
// import { userState } from "../recoil/atoms"
import UserModel from "../models/UserModel";

const Profile = () => {

  const [user, setUser] = useState(""); 

  useEffect(function() {
    if (localStorage.getItem("uid")) {
      UserModel.show().then(response => {
        setUser(response.data)
      })
    }
  }, []); 

  return (
    <div>
      <h1>Profile Page</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.city}</p>
    </div>
  )
}

export default Profile; 