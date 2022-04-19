import { Button } from '@mui/material'
import React from 'react'
import './sideBar.css'
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from './SideBarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import {openSendMessage} from './features/counter/mailSlice'

const SideBar = () => {
    const dispatch=useDispatch()

    return (
        <div className='sideBar'>

            <Button startIcon={<AddIcon fontSize="large" />} className="sideBar__compose" onClick={()=>dispatch(openSendMessage())}>Compose</Button>
            <SideBarOption selected={true} Icon={InboxIcon} title="Inbox" number={54} />
            <SideBarOption Icon={StarIcon} title="Starred" number={54} />
            <SideBarOption Icon={AccessTimeIcon} title="Snozzed" number={54} />
            <SideBarOption Icon={SendIcon} title="Sent" number={54} />
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} />
            <SideBarOption Icon={ExpandMoreIcon} title="More" />
            <div className="sideBar__footer">
                <div className="sideBar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>


                </div>
            </div>

        </div>

    )
}

export default SideBar