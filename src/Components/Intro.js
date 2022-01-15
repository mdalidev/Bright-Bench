import React from 'react'
import me from '../img/man.png'
import ed from '../img/edu.png'
import prf from '../img/prof.png'
import cn from '../img/cons.jpg'
import me1 from '../img/aliimg2.png'
import me2 from '../img/aliimg1.png'
import './intro.css'
import Social from './Socialmedia/Social'
const  Intro=()=> {
    return (
        <div className="i">
         
            <div className="i-left">
             <div className="i-left-wrapper">
                 <h2 className="i-intro">Hello Visitors Welcome to:)</h2>
                 <h1 className="i-name">Bright Bench</h1>
                 <h2 >Education is must to all</h2>
                 <h2 className="i-intro">We Provide a Complete</h2>
                 <div className="i-title">
                     <div className="i-title-wrapper">
                         <div className="i-title-item">Mentorship</div>
                         <div className="i-title-item">Guidance</div>
                         <div className="i-title-item">Advice</div>
                         <div className="i-title-item">Help</div>
                         <div className="i-title-item">Support</div>
                     </div>
                     <i className="fas fa-bars"></i>
                 </div>
                 <p className="i-desc">
                  We always provide our best Mentorship,guidance to our bright students and always try to help them to achieve their very bright & best future.
                 </p>
                 <Social/>
             </div>
            
              </div>
            <div className="i-right">
                <div className="i-bg"></div>
                {/* <img src={cn} alt="" className="i-img" /> */}
                {/* <img src={ed} alt="" className="i-img" /> */}
                <img src={prf} alt="" className="i-img" />
                {/* <img src={me2} alt="" className="i-img" /> */}
            </div>
        </div>
    )
}
export default Intro
