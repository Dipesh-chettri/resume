
import {GiHamburgerMenu}from 'react-icons/gi'
import {HiOutlineArrowCircleDown} from 'react-icons/hi'
// import {MdOutlineRocketLaunch} from 'react-icons/md'
import FileList from './FileList'
import './Home.css'
import About from './About'
import Eductation from './Eductation'
import WorkExprance from './WorkExprance'
import Skills from './Skills'
import { Link } from 'react-router-dom'


function Home() {
  
  return (
    <div className='home-container'>

     <div className='home'>
     <div>
            <HiOutlineArrowCircleDown className='icon'/>
        </div>
        <div>
            {/* <MdOutlineRocketLaunch/> */}
        </div>
        <div>
           
                <Link to="/FileList"><GiHamburgerMenu className='icon'/></Link>
           
            
        </div>
     </div>
     <About/>
     <Eductation/>
     <WorkExprance/>
     <Skills/>
    </div>
  )
}

export default Home