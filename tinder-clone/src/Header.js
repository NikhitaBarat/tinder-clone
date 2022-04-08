import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from "@mui/material";
import './Header.css'

function header() {
  return (
    <div className='header'>
        <IconButton >
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <img className='header_logo' src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' alt=''/>

        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
  )
}

export default header