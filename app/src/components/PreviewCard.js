import React from "react"; 

const PreviewCard = (props) => {
  const { _id, artistPicture, name } = props.info; 

  const isSongs = props.isSongs; 

  function handleDelete(e) {
    e.preventDefault(); 
    console.log(_id)
  }

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-2">
          <a href={`/songs/${_id}`}>
            <img className="card-img rounded-circle border border-white" src={artistPicture} alt={name} width="50"/>
          </a>
        </div>
        <div className="col-md-7">
        <a href={`/songs/${_id}`}>
          { isSongs ? 
          <h6 className="card-text text-white ml-1 mt-3">{name}</h6>
          : 
          <h3 className="card-text text-white ml-1 mt-2">{name}</h3>
          }
        </a>
       </div>
       { isSongs &&
        <div className="col-md-3 mt-2 w-25">
          <form onSubmit={handleDelete}>
           <input className="w-100 h-60" type="submit" value="DELETE" />
          </form>
        </div>
       }  
      </div>
    </div>
  )
}

export default PreviewCard; 