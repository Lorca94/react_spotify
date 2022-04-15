import React from 'react';
import { LoginContainer, LoginButton } from './styles';
import { loginURL } from '../../spotifyLogic';

const Login = () => {
  return (
    <LoginContainer>
      <img alt="logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" className="logo" />
      <LoginButton href={loginURL}>Login With Spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;
