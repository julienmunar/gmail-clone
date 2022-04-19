import React from 'react'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GmailIcon from './Gmail_icon_(2020).svg.png'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import './header.css'
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';
const Header = () => {
    const dispatch=useDispatch()
  return (
    <div className='header'> 
    
    <div className="header__left">
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src={GmailIcon} alt=""/>
        <p>Gmail</p>
        </div>
    <div className="header__middle">
        <SearchIcon/>
        <input placeholder ="Search mail" type="text"/>
        <IconButton>
        <TuneIcon/>
        </IconButton>
    </div>
    <div className="header__right">
    <IconButton>
         <HelpOutlineIcon/>
     </IconButton> 
    <IconButton>
        <SettingsIcon/>
     </IconButton>   
     <IconButton>
         <AppsIcon/>
     </IconButton>  

     <IconButton>
     <Avatar  onClick={()=>{dispatch(logout())}} sx={{ bgcolor: "green", height:"30px",width:"30px"}}>J</Avatar>
     </IconButton>
        </div>
    </div>
  )
}

export default Header