import React from 'react'
import '../compounent/Education.css'
import {RiBook2Fill} from 'react-icons/ri';

function Eductation() {
  return (
    <div className='education-section'>
<hr/>
<div className='container'>
<h3 className='name'>Education</h3>
<hr className='hr'/>
<div ><span className='bag-icon'><RiBook2Fill/></span><span className='date'>06/2010-07/2014</span></div>
<div className='cse'>
    <p>Bengaluru | India</p>

    <h3 className='h3'>CES | B.E</h3>
    <h4 className='h4'>R R Institute of Technology</h4>
</div>
</div>
    </div>
  )
}

export default Eductation