import React, { useContext } from 'react'
import './Toggle.css'
// import s from '../../img/sun1.png'
import s from '../../img/sun3.png'
import m from '../../img/moon1.png'
import ow from '../../img/owl.png'
import { ThemeContext } from '../../context'
const Toggle =()=> {
    const theme =useContext(ThemeContext)
    const handleClick =()=>{
        theme.dispatch({type:"TOOGLE"});
    }
    return (
        <div className="t">
            
            <img className="t-icon"  src={s} alt="" />
            <img className="t-icon"  src={m} alt="" />
            <div className="t-button" onClick={handleClick} style={{right:theme.state.darkMode?0 :25}}></div>
        </div>
    )
}

export default Toggle
