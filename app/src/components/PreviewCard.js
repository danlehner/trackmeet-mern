import React from "react"
import { NavLink } from "react-router-dom"

import SongModel from "../models/SongModel"

const PreviewCard = (props) => {
  const { _id, artistPicture, name } = props.info

  const type = props.type

  const deleteRerender = props.deleteRerender

  function handleDelete(e) {
    e.preventDefault()
    SongModel.delete(_id).then(() => {
      deleteRerender()
    })
  }

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-2">
          <NavLink to={`/${type}/${_id}`}>
            <img className="card-img rounded-circle border border-white" src={artistPicture} alt={name} width="50" />
          </NavLink>
        </div>
        <div className="col-md-7">
          <NavLink to={`/${type}/${_id}`}>{type === "songs" ? <h6 className="card-text text-white ml-1 mt-3">{name}</h6> : <h3 className="card-text text-white ml-1 mt-2">{name}</h3>}</NavLink>
        </div>
        {type === "songs" && (
          <div className="col-md-3 mt-2 w-25">
            <form onSubmit={handleDelete}>
              <input className="w-100 h-60" type="submit" value="DELETE" />
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default PreviewCard
