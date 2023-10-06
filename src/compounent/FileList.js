import React, { useState } from 'react'
import './File.css';
import { Link } from 'react-router-dom';
import {RiDownloadLine} from 'react-icons/ri'
import {AiOutlineShareAlt} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import Share from './Share';


function FileList() {
    const [data,setData]=useState(false)
    const clickHandler=()=>{
        setData(true)
    }
  return (
    <div >
      <div className='containe-file'>
      <header>
        <div className='left'>
            
            <a href="https://mail.google.com/mail/u/0/" className='div'><div><RiDownloadLine className='rxcross'/></div> </a>
            
           
            {  <a className='div' onClick={clickHandler}> <div><AiOutlineShareAlt className='rxcross'/></div></a>}
            
            <a href="https://mail.google.com/mail/u/0/" className='div'> <div><AiOutlineMail className='rxcross'/></div></a>
            
        </div>
        
        <div className='right-div' >
            <Link to="/" >
         <RxCross1 className='rxcross' />
        </Link>
        </div>
      </header>
      { data ? <Share/>:null}
      
        <ul>
            <div>

            </div>
            <li className='li-list'>
        <Link to="/about">Personal Information</Link>
            </li>
            <li className='li-list'>
              <Link to="/education">Education</Link>
            </li>
            <li className='li-list'>
              <Link to="/work-experience">Work Experience</Link>
            </li>
            <li className='li-list'>
              <Link to="/skills">Skills</Link>
            </li>
            <li className='li-list'>
              <Link to="/volunteering">Volunteering</Link>
            </li>
            <li className='li-list'>
              <Link to="/hobbies">Hobbies</Link>
            </li>
          </ul>
    
      </div>
    </div>
  )
}

export default FileList