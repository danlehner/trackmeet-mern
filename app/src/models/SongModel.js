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

  static delete = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE", 
      headers: {
        authorization: `Bearer ${localStorage.getItem("uid")}`, 
        "Content-Type": "application/json"
      },
  })
  .then(response => response.json())
  }
}

export default SongModel; 