import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login/Login';
import { getTokenFromUrl } from '../spotifyLogic';
import Player from './Player/Player';
import { SET_USER } from '../redux/features/userSlice';
import { SET_PLAYLIST } from '../redux/features/playlistSlice';
import { selectToken, SET_TOKEN } from '../redux/features/tokenSlice';

// Se llama a spotifywebapi para poder pasar el user al reducer
const spotify = new SpotifyWebApi();
const App = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    // Se adquiere el hash
    const hash = getTokenFromUrl();
    /* Se limpia la barra de navegacion dejando solo localhost
    window.location.hash = '';
    Se adquiere el token */
    const addToken = hash.access_token;
    if (addToken) {
      dispatch(SET_TOKEN(addToken));
      spotify.setAccessToken(addToken);
      // Se toman los datos de la api spotify
      spotify.getMe().then((user) => dispatch(SET_USER(user)));
      spotify.getPlaylist('2ZiakvUz6GO3gP3It7Gb58')
      .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
      spotify.getPlaylist('3SeUkFLATafG2VL14trfRK')
      .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
      spotify.getPlaylist('50q9vauib40iUX9H99zeGW')
      .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
      }
  // Se carga cada vez que usamos el dispatch...
  }, [dispatch]);
    return (
      <div>
        {/* Si el token no es null nos pasará al reproductor, si no mostrará la página de login */}
        { token ? <Player /> : <Login /> }
      </div>
    );
};

export default App;
