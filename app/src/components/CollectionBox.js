import React from "react"; 

import PreviewCard from "../components/PreviewCard"; 

const CollectionBox = (props) => {

  const { songs, artists, genres } = props.user;  

  function printItems(items, type) {

    let isSongs = false; 

    if (type === "songs") {
      isSongs = true; 
    }

    if (items.length <= 5) {
      return items.map(item => {
        return  <PreviewCard key={item._id} info={item} isSongs={isSongs} />
     })
    } else {
      return items.slice(0, 5).map(item => {
        return  <PreviewCard key={item._id} info={item} isSongs={isSongs} />
      })
    }
  }

  return (
    <div>
      <div id="index-container" className="container show-container mt-5 mb-5">
        <div className="row h-100">
          <div id="genre-column" className="col pb-5">
            <a href="/profile/genres">
              <h3 className="mt-3 display-1">Genres</h3>
              <hr />
            </a>
            <div className="mobile-card-container">
              {printItems(genres, "genres")}
            </div>
          </div>
          <div id="artist-column" className="col pb-5">
            <a href="/profile/genres">
              <h3 className="text-white mt-3 display-1">Artists</h3>
              <hr />
            </a>
            <div className="mobile-card-container">
              {printItems(artists, "artists")}
            </div>
          </div>
          <div id="song-column" className="col pb-5">
            <a href="/profile/genres">
              <h3 className="mt-3 display-1">Songs</h3>
              <hr />
            </a>
            <div className="mobile-card-container">
              {printItems(songs, "songs")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CollectionBox; 
