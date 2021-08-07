import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import { useRecoilState } from "recoil"
import { userState } from "../recoil/atoms"

import ProfileModel from "../models/ProfileModel" 

const Nav = (props) => {

  const [user, setUser] = useRecoilState(userState); 
  const [showNav, setShowNav] = useState(true)

  useEffect(function() {
    ProfileModel.show().then(response => {
      setUser(response.data)
    })

    handleResize()

  }, []); 

  function handleResize() {
      setShowNav(window.innerWidth > 768) // shows nav any time the screen width is desktop size
  }

  window.addEventListener("resize", handleResize)

  function logout(e) {
    e.preventDefault(); 
    setUser(null); 
    localStorage.clear(); 
  }

  return (
    <>
    { user && 
      <nav className="navbar">
       <div className={showNav ? "nav-left show-nav" : "nav-left"}> {/* .nav-left is set to "display: none;"" by default on mobile sizes - .show-nav overrides the style */}
         <NavLink to="/">Track Meet</NavLink>
         <NavLink to="/search" className="nav-link white" >SEARCH</NavLink>
         <NavLink to="/profile" className="nav-link white" >{user.username}'s PROFILE</NavLink>
         <button onClick={logout}>
          <input type="submit" className="nav-link" value="Log Out"/> 
        </button>
       </div>
       <div className="hamburger-section">
         <button onClick={() => setShowNav(!showNav)} id="hamburger">Hamburger goes here</button>
       </div>
     </nav>
    }
    </>
  )
}

export default Nav; 