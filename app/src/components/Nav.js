import React, { useEffect } from "react"; 
import { NavLink } from "react-router-dom"; 

import { useRecoilState } from "recoil"; 
import { userState } from "../recoil/atoms"; 

import ProfileModel from "../models/ProfileModel"; 

const Nav = (props) => {

  const [user, setUser] = useRecoilState(userState); 

  useEffect(function() {
    ProfileModel.show().then(response => {
      setUser(response.data)
    })

  }, []); 

  function logout(e) {
    e.preventDefault(); 
    setUser(null); 
    localStorage.clear(); 
  }

  return (
    <>
    { user && 
      <nav id="navbar" className="navbar navbar-dark navbar-expand-sm">
       <NavLink to="/" className="navbar-brand" >Track Meet</NavLink>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item"> 
          <NavLink to="/search" className="nav-link white" >SEARCH</NavLink>
        </li>
        <li className="nav-item"> 
          <NavLink to="/profile" className="nav-link white" >{user.username}'s PROFILE</NavLink>
        </li>
        <li>
          <form onSubmit={logout}>
            <input type="submit" className="nav-link" value="Log Out"/> 
          </form>
        </li>
       </ul>
      </div>
     </nav>
    }
    </>
  )
}

export default Nav; 