import React, { useState } from "react"; 

import AuthModel from "../models/AuthModel"

function Register(props) {

  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [profilePic, setProfilePic] = useState(""); 
  const [city, setCity] = useState(""); 
  const [bio, setBio] = useState(""); 
  const [error, setError] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault() 

    AuthModel.register({ username, email, password, profilePic, city, bio}).then(res => {
      console.log(res)
      if (res.status === 201) {
        props.history.push('/login')
      } else {
        setError(res.message)
      }
    })
  }


  return (
    <div className="box med-box page-box dead-center login-box">
      <div className="col half-col photo-col">
        <img src="/assets/images/unsplash-open.jpg" />
      </div>
        <div className="col half-col form-col">
          {error && <p>{error}</p>}
            <h1 className="mega-text flush-text">Register</h1>
            <form id="register" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input 
                type="text" 
                className="form-control" 
                name="username" 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Password</label>
              <input 
                type="password" 
                className="form-control" 
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Profile Pic URL</label>
              <input 
                type="text" 
                className="form-control" 
                name="profilePic" 
                onChange={(e) => setProfilePic(e.target.value)}
                value={profilePic} 
                />
            </div>
            <div className="form-group">
            <label htmlFor="userName">City</label>
              <input 
                type="text" 
                className="form-control" 
                name="city" 
                onChange={(e) => setCity(e.target.value)}
                value={city} 
                />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Bio</label>
              <input 
                type="text" 
                className="form-control" 
                name="bio" 
                onChange={(e) => setBio(e.target.value)}
                value={bio} 
                />
            </div>
            <input className="btn btn-primary" type="submit" value="Create Account" />
          </form>
        </div>
    </div>
  )
}

export default Register; 