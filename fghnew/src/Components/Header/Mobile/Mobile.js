import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context';
import './mobile.css';
function Mobile({isOpen,setIsOpen}) {
    const theme =useContext(ThemeContext)
//   const disp=()={

//   }
    const darkMode=theme.state.darkMode;

    return (
        <div style={{backgroundColor: darkMode && "#333"}} className="mobile"  onClick={()=>setIsOpen(!isOpen)} >
          <div className="close-icon" onClick={()=>setIsOpen(!isOpen)} >
          <i class="fas fa-times-circle"></i>
          </div>
          <div  className="mobile-options">
          <div  className="mobile-option" >
            <a style={{color: darkMode && "white"}} href="#projects" >
            <i  class="fas fa-project-diagram option-icon"> Projects</i> 
           
                </a>
                </div>
                </div>
            <div className="mobile-options">
            <div className="mobile-option">
            <a style={{color: darkMode && "white"}} href="#skill">
            <i class="fas fa-laptop-code option-icon">Skills</i>

            </a>

            </div>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
            <a style={{color: darkMode && "white"}} href="#education">
            <i class="fas fa-user-graduate option-icon">Education</i>

            </a>

            </div>
            </div>
          
            <div className="mobile-options">
            <div className="mobile-option">
            <a style={{color: darkMode && "white"}} href="#about">
            <i class="fas fa-address-card option-icon">About</i>
            </a>

            </div>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
            <a  style={{color: darkMode && "white"}} href="#contact">
            <i class="fas fa-mobile-alt option-icon">Contact</i>
            </a>
     
            </div>
            </div>
        </div>
    )
}

export default Mobile
