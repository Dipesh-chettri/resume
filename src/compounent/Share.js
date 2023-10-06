import React, { useState } from 'react'
import './Share.css';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

function Share() {
 
  return (
    <div className='sharecontainer'>
        <span>
        <a href="https://www.facebook.com/login/"> <BsFacebook className='chat-icon' /></a></span>
        
        <span>
        <a href="https://in.linkedin.com/"><GrLinkedin className='chat-icon'/></a>
            </span>
        <span>
        <a href="http://www.twitter.com/"><AiFillTwitterCircle  className='chat-icon'/></a>
            </span>
        <span>
        <a href="https://www.messenger.com/"><BsMessenger className='chat-icon'/></a>
            </span>
        <span>
        <a href="https://www.whatsapp.com/"> <IoLogoWhatsapp className='chat-icon'/></a>
           </span>
    </div>
  )
}

export default Share