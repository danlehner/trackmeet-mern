import React from 'react-dom'

const About = () => {
  return (
    <div className="box large-box page-box dead-center">
      <div className="col">
        <h1 className="mega-text flush-text">What is <br /><span className="highlight-text spaced-text">Track Meet</span>?</h1>
        <p className="text-block">Track Meet is a personalized music journal made by software developer/musician Dan Lehner. Powered by Deezer's public API, users can add songs to their collection, make notes on each song, keep track of what songs they haven't listened to yet and see metrics about their music taste. </p>
      </div>
      <div id="photo-col" className="col"> 
        <img id="homepage-side-photo" src="/assets/images/dl-trombone.jpg" />
      </div>
    </div>
  )
}

export default About