import React, { useContext, useState } from 'react'
import Mobile from './Mobile/Mobile'
import Web from './Web/Web'
import './Header.css'
import logo from '../../img/logo1.svg'
import logo2 from '../../img/logo2.svg'
import { ThemeContext } from '../../context'


function Header() {
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    const [isOpen,setIsOpen]=useState(false)
    return (
        <div className="header">
            <div style={{color: darkMode && "#999"}} className="logo">
                
                <img src={logo2} alt=""  />
                </div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                    </div>
                <div className="mobile-menu">
               <div onClick={()=>setIsOpen(!isOpen)}>
               <i class="fas fa-bars" ></i>
               {/* <i class="fas fa-hamburger menu-icon" ></i> */}
      
             
                 </div>
                 {isOpen&&<Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
               
                               
                    </div>
            </div>
            
        </div>
    )
}

export default Header
