import React from "react"; 
import { Switch, Route } from "react-router-dom"; 

import Artists from "../pages/Artists/Artists"; 
import ArtistShow from "../pages/Artists/ArtistShow"; 
import Genres from "../pages/Genres/Genres"; 
import GenreShow from "../pages/Genres/GenreShow"; 
import Songs from "../pages/Songs/Songs"; 
import SongShow from "../pages/Songs/SongShow"; 
import Home from "../pages/Home"; 
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import Profile from "../pages/Profile"; 
import Search from "../pages/Search"; 
import ProfileEdit from "../pages/ProfileEdit"; 

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  )
}

export default Routes; 