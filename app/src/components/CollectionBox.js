import React from "react"; 
import { NavLink } from "react-router-dom"; 

import PreviewCard from "../components/PreviewCard"

const CollectionBox = (props) => {
  const { songs, artists, genres } = props.user

  const deleteRerender = props.deleteRerender

  function printItems(items, type) {

    if (items.length <= 5) {
      return items.map((item) => {
        return <PreviewCard key={item._id} info={item} type={type} deleteRerender={deleteRerender} />
      })
    } else {
      return items.slice(0, 5).map((item) => {
        return <PreviewCard key={item._id} info={item} type={type}deleteRerender={deleteRerender} />
      })
    }
  }

  return (
    <div>
      <div id="index-container" className="container show-container mt-5 mb-5">
        <div className="row h-100">
          <div id="genre-column" className="col pb-5">
            <NavLink to="/genres">
              <h3 className="mt-3 display-1">Genres</h3>
              <hr />
            </NavLink>
            <div className="mobile-card-container">{printItems(genres, "genres")}</div>
            {genres.length > 5 && (
              <div className="d-flex justify-content-end mt-5">
                <a href="/genres">
                  <button className="btn text-white">See More</button>
                </a>
              </div>
            )}
          </div>
          <div id="artist-column" className="col pb-5">
            <NavLink to="/artists">
              <h3 className="text-white mt-3 display-1">Artists</h3>
              <hr />
            </NavLink>
            <div className="mobile-card-container">{printItems(artists, "artists")}</div>
            {artists.length > 5 && (
              <div className="d-flex justify-content-end mt-5">
                <NavLink to="/artists">
                  <button className="btn text-white">See More</button>
                </NavLink>
              </div>
            )}
          </div>
          <div id="song-column" className="col pb-5">
            <NavLink to="/songs">
              <h3 className="mt-3 display-1">Songs</h3>
              <hr />
            </NavLink>
            <div className="mobile-card-container">{printItems(songs, "songs")}</div>
            {songs.length > 5 && (
              <div className="d-flex justify-content-end mt-5">
                <NavLink to="/songs">
                  <button className="btn text-white">See More</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionBox
