import React from 'react'
import './sendmail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'

import { closeSendMessage } from './features/counter/mailSlice';
import {db} from './firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { useDispatch } from 'react-redux';
const SendMail = () => {
    const { register, handleSubmit, watch,formState: { errors } } = useForm()
    const dispatch=useDispatch()



    // const HandleonSubmit = async (e) => {
    //  e.preventDefault()
    //     try{
    //          await addDoc(collection(db,"emails"),{
    //              to:"julien.munar@airbus.com",
    //              subject:"How Are you my friend",
    //              message:"I want to go to the beach",
    //              timestamp: Timestamp.now()
    //          })
    //     }
    //   catch (error){alert (error)
     
    //   }
    //   dispatch(closeSendMessage())
    //  }


    const HandleonSubmit = async (data) => {
       try{
            await addDoc(collection(db,"emails"),{
                to:data.to,
                subject:data.subject,
                message:data.message,
                timestamp: Timestamp.now()
            })
       }
     catch (error){alert (error)
    
     }
     dispatch(closeSendMessage())
    }
   


    return (
        <div className='sendmail'>
            <div className="sendmail__header">
                <h3>New Mesage</h3>
                <CloseIcon onClick={()=>{dispatch(closeSendMessage())}}className='sendmail__close' />
            </div>
            <form onSubmit={handleSubmit(HandleonSubmit)}>
                <input
                    placeholder='To'
                    type="text"
                    {...register("to", { required: true })}
                />

                {errors.to && <p className='sendmail__error'>"To is required"</p>}

                <input type="text"
                    placeholder='Subject'
                    {...register("subject", { required: true })}
                />
                 {errors.subject && <p className='sendmail__error'>"Subject is required"</p>}
                <input
                    type="text"
                    placeholder='Message...'
                    className='sendmail__message'
                    {...register("message", { required: true })}
                />
                     {errors.message && <p className='sendmail__error'>"Message is required"</p>}
                <div className="sendmail__options">
                    <Button type="submit" className='sendmail__send'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail