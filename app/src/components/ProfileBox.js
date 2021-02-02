import React from "react"; 

const ProfileBox = (props) => {
  const { username, profilePic, city, bio, _id } = props.user; 

  return (
    <div>
    <div className="jumbotron profile-jumbotron">
      <div className="container">
        <h1 className="display-1 text-white">My Profile</h1>
      </div>
    </div>
      <div className="container w-75 show-container mt-5 mb-5 profile-box">
        <div className="row h-100">
          <div className="col pb-5 prof-left" >
            <h2 className="mt-3 align-self-center display-3">{username}</h2>
            <img className="rounded-circle mt-3" src={profilePic} width="100" />
          </div>
          <div className="profile-info col pl-4 border border-dark">
            <div className="mb-3 mt-1">
             <h2 className="mt-3 align-self-center">City</h2>
             <h4>{city}</h4>
           </div>
           <div className="mb-3 mt-1">
            <h2 className="mt-3 align-self-center" style={{ color: "#5a7670" }}>Bio</h2>
            <p>{bio}</p>
           </div>
           <div className="d-flex justify-content-end">
            <a href="#">
              <button className="btn text-white" style={{ backgroundColor: "#5a7670" }}>Edit Profile</button>
            </a>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBox; 