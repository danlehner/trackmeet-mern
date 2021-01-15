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
      console.log(response); 
      localStorage.setItem("uid", response.signedJwt); 
      UserModel.show().then(response => {
        if (response.status === 200) {
          console.log(response); 
          setUser(response.data); 
          props.history.push('profile'); 
        } else {
          setError(response.message); 
        }
      })
    })
  }

  return (
    <div className="container show-container mt-5 mb-5">
      <div className="row h-100" style={{ minHeight: 400 }}>
        <div className="col" style={{
          backgroundImage: `url("https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg")`, 
          backgroundSize: "cover"
        }}>
          <h1 className="text-white mt-3 display-2">Register</h1>
        </div>
        <div className="col pl-4 border border-dark pt-3 pb-3">
          {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Login; 