import React from 'react'
import ab from '../../img/about.jpg'
import ab1 from '../../img/about1.jpg'
import me2 from '../../img/aliimg1.png'
import con from '../../img/cons.jpg'
import Seperator from '../Seperator/Seperator'
import './about.css'
function About() {
    return (
        <>
    <Seperator/>
        <div  id="about" className="a">
           
             <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
           <img src={con} alt="" className="a-img" />
           {/* <img src="https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106?s=612x612" alt="" className="a-img" /> */}
                </div>
              
            </div>
            <div className="a-right">


                <h1 className="a-title">About Us</h1>
                
                <p className="a-sub">
                   Bright Bench is aleading Overseas Education Consulting firm that deals in Study,Work and Migrate option in countries like New Zealand,Australia,Canada,UK,USA,Singapore and Many More...
                </p>
               
                <p className="a-desc">
                      <h3 >Here is our  Few Courses  Highlights</h3>
                <ul className="a-desc-list">
               
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>Full Stack web and mobile development</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>Problem Solving Ability</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>Data Structure's & Algo</li>
                 
                 
                </ul>
                </p>
              
            </div>
          
        </div>
        </>
    )
}

export default About
