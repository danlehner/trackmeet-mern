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
    <div className="container show-container mt-5 mb-5">
      <div className="row h-100">
        <div className="col register-hero" style={{
          backgroundImage: `url("https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg")`, 
          backgroundSize: "cover"
        }}>
          <h1 className="text-white mt-3 display-2">Register</h1>
          <h4 className="text-white" style={{ maxWidth: "300 px"}}>Already have an account with us? <a className="text-dark" style={{ backgroundColor: "#fafafa", padding: "2px" }} href="/login">Login!</a></h4>
        </div>
        <div className="col pl-4 border border-dark pt-3 pb-3">
          {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Register; 