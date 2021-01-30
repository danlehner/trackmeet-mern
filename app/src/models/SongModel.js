const URL = "http://localhost:3001/api/v1/songs";

class SongModel {
  static show = () => {
    return fetch(URL, {
      method: "GET", 
      headers: {
        authorization: `Bearer ${localStorage.getItem("uid")}`
      },
    })
    .then(response => response.json())
  }
}

export default SongModel; 