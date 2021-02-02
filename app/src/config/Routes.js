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

import { useRecoilValue } from "recoil"; 
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState); 

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      {loggedIn && (
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route path="/genres/:id" component={GenreShow} />
          <Route path="/genres" component={Genres} />
          <Route path="/artists/:id" component={ArtistShow} />
          <Route path="/artists" component={Artists} />
          <Route path="/songs/:id" component={SongShow} />
          <Route path="/songs" component={Songs} />
          <Route path="/search" component={Search} />
        </Switch>
      )}
    </Switch>
  )
}

export default Routes; 