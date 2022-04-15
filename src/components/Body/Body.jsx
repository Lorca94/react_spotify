import React from 'react';
import {
 BodyContainer, InfoContainer, Info,
} from './styles';
import Header from './Header/Header';

const Body = () => {
  return (
    <BodyContainer>
      <Header />
      <InfoContainer>
        <Info>
          <h1>
            Interfaz Tipo Spotify
          </h1>
          <h2>
            Todos los datos obtenidos son directamente extraidos de spotify
          </h2>
        </Info>
      </InfoContainer>
    </BodyContainer>
  );
};

export default Body;
