import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";
import './Swipebuttons.css'

function Swipebuttons() {
  return (
    <div className='swipebuttons'>
        <IconButton className='repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className='right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='light'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Swipebuttons