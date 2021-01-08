import React from "react"; 

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
      </div>
    </div>
  )
}

export default Register; 