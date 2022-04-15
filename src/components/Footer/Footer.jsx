import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
import React from 'react';
import {
 FooterLeft, FooterRight, FooterContainer, FooterCenter,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img alt="cover" src="https://discosdeayeryhoy.lasextacuerda.com/wp-content/uploads/2021/08/IMG_20210807_110947_746-300x300.jpg" />
        <div>
          <h4>Sum 41</h4>
          <p>All killer no Filler</p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon />
        <SkipNextIcon />
        <RepeatIcon />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item><PlaylistPlayIcon /></Grid>
          <Grid item><VolumeDownIcon /></Grid>
          <Grid item xs><Slider /></Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
