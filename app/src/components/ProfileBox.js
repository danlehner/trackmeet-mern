import React from "react"
import { NavLink } from "react-router-dom"

const ProfileBox = (props) => {
  const { username, profilePic, city, bio, _id } = props.user

  return (
    <div id="profile-box" className="box med-box page-box full-width">
      <div className="half-col">
      <img src={profilePic} />
      </div>
      <div id="prof-info" className="half-col">
        <h1>{username}</h1>
        <h4>City: {city}</h4>
        <p>Bio: {bio}</p>
        <NavLink to="/profile/edit">
          <button>Edit Profile</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ProfileBox
