import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import SpotifyBody from './styles';

const Player = () => {
  const [actualPlay, setActualPlay] = useState('');
  return (
    <>
      <SpotifyBody>
        <Sidebar />
        <Body setActualPlay={setActualPlay} />
      </SpotifyBody>
      <Footer actualPlay={actualPlay} />
    </>
  );
};

export default Player;
