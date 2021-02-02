import React from "react"; 

import PreviewCard from "../components/PreviewCard"; 

const CollectionBox = (props) => {

  const { songs, artists, genres } = props.user;  

  const deleteRerender = props.deleteRerender; 

  function printItems(items, type) {

    let isSongs = false; 
    if (type === "songs") {
      isSongs = true; 
    }

    if (items.length <= 5) {
      return items.map(item => {
        return  <PreviewCard key={item._id} info={item} isSongs={isSongs} deleteRerender={deleteRerender} />
     })
    } else {
      return items.slice(0, 5).map(item => {
        return  <PreviewCard key={item._id} info={item} isSongs={isSongs} deleteRerender={deleteRerender}/>
      })
    }
  }

  return (
    <div>
      <div id="index-container" className="container show-container mt-5 mb-5">
        <div className="row h-100">
          <div id="genre-column" className="col pb-5">
            <a href="/genres">
              <h3 className="mt-3 display-1">Genres</h3>
              <hr />
            </a>
            <div className="mobile-card-container">
              {printItems(genres, "genres")}
            </div>
            {genres.length > 5 && 
              <div className="d-flex justify-content-end mt-5">
              <a href="/genres">
                <button className="btn text-white">See More</button>
              </a>
            </div>
            }
          </div>
          <div id="artist-column" className="col pb-5">
            <a href="/artists">
              <h3 className="text-white mt-3 display-1">Artists</h3>
              <hr />
            </a>
            <div className="mobile-card-container">
              {printItems(artists, "artists")}
            </div>
            {artists.length > 5 && 
              <div className="d-flex justify-content-end mt-5">
              <a href="/artists">
                <button className="btn text-white">See More</button>
              </a>
            </div>
            }
          </div>
          <div id="song-column" className="col pb-5">
            <a href="/songs">
              <h3 className="mt-3 display-1">Songs</h3>
              <hr />
            </a>
            <div className="mobile-card-container">
              {printItems(songs, "songs")}
            </div>
            {songs.length > 5 && 
              <div className="d-flex justify-content-end mt-5">
              <a href="/songs">
                <button className="btn text-white">See More</button>
              </a>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  )

}

export default CollectionBox; 
