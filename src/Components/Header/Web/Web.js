import React, { useContext } from 'react'
import { ThemeContext } from '../../../context';
import './web.css';
function Web() {
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    return (
        <div style={{backgroundColor: darkMode && "#333"}} className="web">
            <div  className="web-option">
            <a style={{color: darkMode && "white"}} href="#projects">
            <i class="fas fa-project-diagram option-icon"></i>Partners
               
            </a>

            </div>
           
            <div className="web-option">
            <a style={{color: darkMode && "white"}} href="#skill">
            <i class="fas fa-laptop-code option-code"></i>Services

            </a>

            </div>
            <div className="web-option">
            <a style={{color: darkMode && "white"}} href="#education">
            <i class="fas fa-user-graduate option-code"></i>Mentors

            </a>

            </div>
            <div className="web-option">
            <a style={{color: darkMode && "white"}} href="#about">
            <i class="fas fa-address-card option-code"></i>About
            </a>

            </div>
            <div className="web-option">
            <a style={{color: darkMode && "white"}} href="#contact">
            <i class="fas fa-mobile-alt option-code"></i>Contact
            </a>

            </div>
        </div>
    )
}

export default Web
