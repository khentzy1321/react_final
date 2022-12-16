import React from 'react';
import { Link } from 'react-router-dom'; 
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai'; 
import * as IoIcons from 'react-icons/io'; 

export const SidebarData = [
      {
           title: 'Home',
           path:'/',
           icon: <AiIcons.AiFillHome/>,
           cName: 'nav-text'
      },
      {
           title: 'About',
           path:'/about',
           icon: <IoIcons.IoIosPaper/>,
           cName: 'nav-text'
      },
      {
           title: 'Employee',
           path:'/emp',
           icon: <IoIcons.IoIosPeople/>,
           cName: 'nav-text'
      },
]