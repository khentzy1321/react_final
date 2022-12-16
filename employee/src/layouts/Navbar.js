import React, {useState} from 'react'
import { Link } from 'react-router-dom'; 
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai'; 
import {SidebarData} from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';

function Navbar() {

     const [sidebar, setSidebar] = useState(false);

     const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
     <IconContext.Provider value={{ color:'orange' }}>
      <div className='navbar'>
          <Link to="#" className='menu-bars'>
               <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
      </div>
      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-menu-items' onClick={showSidebar}>
               <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                         <AiIcons.AiOutlineClose />
                    </Link>
               </li>
               {SidebarData.map((item, index) => {
                    return (
                         <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                   {item.icon}
                                   <span>{item.title}</span>
                              </Link>
                         </li>
                    )
               })}
          </div>
      </nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
