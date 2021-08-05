import React, { useState } from "react"; 
import AuthModel from "../models/AuthModel"; 
import UserModel from "../models/UserModel"; 

import { useSetRecoilState } from "recoil"; 
import { userState } from "../recoil/atoms"; 

const Login = (props) => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("")
  const setUser = useSetRecoilState(userState); 

  function handleSubmit(e) {
    e.preventDefault(); 
    AuthModel.login({ email, password }).then(response => {
      localStorage.setItem("uid", response.signedJwt); 
      UserModel.show().then(response => {
        if (response.status === 200) {
          setUser(response.data); 
          props.history.push('profile'); 
        } else {
          setError(response.message); 
        }
      })
    })
  }

  return (
    <div className="box med-box page-box dead-center login-box">
      <div className="col half-col photo-col">
        <img src="/assets/images/unsplash-open.jpg" />
      </div>
      <div className="col half-col form-col">
        {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
          <h1 className="mega-text flush-text">Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
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
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login; 