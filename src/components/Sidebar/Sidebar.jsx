import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChoice from './SidebarChoice';
import { SidebarContainer, Playlists } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img alt="logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" />
      <SidebarChoice title="Inicio" Icon={HomeIcon} />
      <SidebarChoice title="Buscar" Icon={SearchIcon} />
      <SidebarChoice title="Tu biblioteca" Icon={LibraryMusicIcon} />
      <Playlists>
        <h4 style={{ padding: '0 10px' }}>Playlists</h4>
      </Playlists>
      <hr />
    </SidebarContainer>
  );
};

export default Sidebar;
