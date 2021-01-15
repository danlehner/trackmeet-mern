const URL = "http://localhost:3001/api/v1/profile";

class ProfileModel {
  static show = () => {
    return fetch(URL, {
      method: "GET", 
      headers: {
        authorization: `Bearer ${localStorage.getItem("uid")}`, 
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
  }
}

export default ProfileModel; 