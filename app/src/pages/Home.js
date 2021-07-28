import React from "react"

const Home = () => {
  return (
    <div id="welcome-box" className="box page-box large-box dead-center">
      <div id="welcome-text" className="col">
        <h1 className="mega-text flush-text">Welcome to <br /><span className="highlight-text spaced-text">Track Meet</span>.</h1>
        <h4>Listen carefully.</h4>
        <div id="welcome-sub-nav"> 
          <div>
            <h2><a href="/about">What is this?</a></h2>
          </div>
          <div>
            <h2><a href="/login">Returning User?</a></h2>
          </div>
          <div>
            <h2><a href="/register">New to Track Meet?</a></h2>
          </div>
          <div>
            <h2 id="try-out"><a href="/profile">Try It Out!</a></h2>
          </div>
        </div>
      </div>
      <div id="photo-col" className="col"> 
        <img id="homepage-side-photo" src="/assets/images/track-meet-homepage.jpg" />
      </div>
    </div>
  )
}

export default Home