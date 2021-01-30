import React, { useEffect, useState } from "react"; 

import ProfileModel from "../models/ProfileModel";

import ProfileBox from "../components/ProfileBox"; 
import CollectionBox from "../components/CollectionBox"; 

const Profile = () => {

  const [user, setUser] = useState(""); 

  useEffect(function() {
    if (localStorage.getItem("uid")) {
      ProfileModel.show().then(response => {
        setUser(response.data); 
      })
    }
  }, []); 


  return (
    <div>
      {user ? 
      <>
        <ProfileBox user={user} />
        <CollectionBox user={user} />
        </>
      :
        <p>Loading</p>
      }
    </div>
  )
}

export default Profile; 
