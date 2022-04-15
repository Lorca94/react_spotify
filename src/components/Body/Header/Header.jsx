import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { HeaderContainer, HeaderLeft, HeaderRight } from '../styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder="Buscar por Artistas, canciones..." />
      </HeaderLeft>
      <HeaderRight>
        <Avatar />
        <h4>Raúl Lorca</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
