import React, { useState } from "react"; 

function Register(props) {
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
            <form>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input 
               type="text" 
               className="form-control" 
               name="username" 
               />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Email Address</label>
              <input 
               type="email" 
               className="form-control" 
               name="email" 
               />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Password</label>
              <input 
               type="password" 
               className="form-control" 
               name="password" 
               />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Profile Pic URL</label>
              <input 
               type="text" 
               className="form-control" 
               name="profilePic" 
               />
            </div>
            <div className="form-group">
            <label htmlFor="userName">City</label>
              <input 
               type="text" 
               className="form-control" 
               name="city" 
               />
            </div>
            <div className="form-group">
            <label htmlFor="userName">Bio</label>
              <input 
               type="text" 
               className="form-control" 
               name="bio" 
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