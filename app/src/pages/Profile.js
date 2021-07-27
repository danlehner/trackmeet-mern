import React, { useEffect, useState } from "react"

import ProfileModel from "../models/ProfileModel"

import ProfileBox from "../components/ProfileBox"
import CollectionBox from "../components/CollectionBox"
import Nav from "../components/Nav"

const Profile = () => {
  const [user, setUser] = useState("")

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      ProfileModel.show().then((response) => {
        setUser(response.data)
      })
    }
  })

  function deleteRerender() {
    ProfileModel.show().then((response) => {
      setUser(response.data)
    })
  }

  return (
    <div>
      {user ? (
        <>
          <Nav />
          <ProfileBox user={user} />
          <CollectionBox user={user} deleteRerender={deleteRerender} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default Profile
