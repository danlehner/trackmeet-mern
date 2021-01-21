import React, { useEffect, useState } from "react"; 

import UserModel from "../models/UserModel";
import ProfileBox from "../components/ProfileBox"; 

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
    <ProfileBox user={user} />
    </div>
  )
}

export default Profile; 