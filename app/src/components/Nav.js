import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FaAlignRight } from "react-icons/fa"

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
      <nav id="navbar">
       <div className={showNav ? "nav-left show-nav" : "nav-left"}> {/* .nav-left is set to "display: none;"" by default on mobile sizes - .show-nav overrides the style */}
         <NavLink id="logo" to="/">Track Meet</NavLink>
         <NavLink to="/search">Search</NavLink>
         <NavLink to="/profile">{user.username}'s Profile</NavLink>
         <NavLink to="/about">About</NavLink>
         <button onClick={logout} id="logout">Logout</button>
       </div>
       <div className="hamburger-section">
         <button onClick={() => setShowNav(!showNav)} id="hamburger">
           {showNav ? 
            <FaAlignRight size={25} style={{ color: '#fafafa' }}
             />
           : 
            <FaAlignRight size={40} style={{ color: '#fafafa' }}
             />
           }
         </button>
       </div>
     </nav>
    }
    </>
  )
}

export default Nav; 