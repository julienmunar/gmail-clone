import React from 'react';
import Mail from './Mail';

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EmailList from './EmailList';
import SendMail from './SendMail';
import {selectSendMessageIsOpen} from './features/counter/mailSlice'
import {useSelector} from 'react-redux'
import { selectUser } from './features/counter/userSlice';
import Login from './Login'


function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user=useSelector(selectUser)
  console.log(user)
  return (
    
    <Router>
      {!user ? (<Login/> ) : (
  <div>
  <Header />
  <div className='app__body'>


    <SideBar />

    <Routes>
      <Route path="/" element={<EmailList />} />
      <Route path="/mail" element={<Mail />} />

 
      {/*LefBar */}
   

    </Routes>
  </div>
  {sendMessageIsOpen &&  <SendMail/>}
 
</div>

      )}
    
    </Router> 
  );
}

export default App;
