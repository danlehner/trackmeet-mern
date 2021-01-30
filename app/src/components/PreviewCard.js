import React from "react"; 

const PreviewCard = (props) => {
  const { _id, artistPicture, name } = props.info

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-2">
          <a href={`/profile/songs/${_id}`}>
            <img className="card-img rounded-circle border border-white" src={artistPicture} alt={name} width="50"/>
          </a>
        </div>
        <div className="col-md-7">
        <a href={`/profile/songs/${_id}`}>
          <h6 className="card-text text-white mt-3 ml-1">{name}</h6>
        </a>
       </div>
       <div className="col-md-3 mt-2 w-25">
         <input className="w-100 h-50" type="submit" value="DELETE" />
       </div>
      </div>
    </div>
  )
}

export default PreviewCard; 