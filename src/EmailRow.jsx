import React from 'react'
import './emailRow.css'
import { Checkbox } from '@mui/material'
import { IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useDispatch} from 'react-redux' 
import { selectMail } from './features/counter/mailSlice';
import { useNavigate } from 'react-router-dom';

const EmailRow = ({ title, subject, description, id, time }) => {
    let navigate = useNavigate();
    const dispatch=useDispatch()
    const OpenMail=()=>{dispatch(selectMail({
        id,
        title,
        subject,description,time
    }))
    navigate("/mail")
}
    return (
        <div onClick={OpenMail} className='emailRow'>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailRow_title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}
                    <span className='emailRow__description'>{description}</span>
                </h4>
            </div>

            <div className="emailRow__time">{time}

            </div>


        </div>
    )
}

export default EmailRow