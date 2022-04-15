import React from 'react';
import { useSelector } from 'react-redux';
import {
 BodyContainer, InfoContainer, Info, InfoText,
} from './styles';
import Header from './Header/Header';
import { selectPlaylist } from '../../redux/features/playlistSlice';

const Body = () => {
  const playlists = useSelector(selectPlaylist);
  return (
    <BodyContainer>
      <Header />
      <InfoContainer>
        { playlists.map((playlist) => {
          return (
            <>
              <Info>
                <img src={playlist.images[0].url} alt="cover" />
                <InfoText>
                  <h1>{playlist.name}</h1>
                </InfoText>
              </Info>
            </>
          );
        })}
      </InfoContainer>
    </BodyContainer>
  );
};

export default Body;
