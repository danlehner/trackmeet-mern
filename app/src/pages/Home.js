import React from "react"; 

const Home = () => {
  // two columns for the whole welcome box 
  // left col: h1 that sits flush 
  // subheading text
  // div that sits in the center
  // right aligned link text
  // right col: image sitting in the center
  return (
    <div id="welcome-box" className="box large-box dead-center">
      <div id="welcome-text" className="col">
        <h1 className="mega-text flush-text">Welcome to <br /><span className="highlight-text spaced-text">Track Meet</span>.</h1>
        <h4>Listen carefully.</h4>
        <div id="welcome-sub-nav"> 
          <div>
            <h2><a href="/profile">What is this?</a></h2>
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
      <div className="col"> 
        <img id="homepage-side-photo" src="/assets/images/track-meet-homepage.jpg" />
      </div>
    </div>
  )
}

export default Home; 