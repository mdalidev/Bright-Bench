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
              <strong> BrightBench </strong> is a leading Charitable Indian Education Consulting firm that provides unpaid 
Career Counselling, Study, Selection of best colleges in various fields with best Mentors and 
Many More…
<p>
<strong> BrightBench </strong> is a pioneer in  <strong>“Career Counselling”</strong> think tank that works with an objective to 
deliver quality knowledge about careers, selection of courses with best colleges and
Universities to the student so that they can make clear and unbiased choice about their career.
We are pioneer in this industry. Knowing about the courses, colleges, places, charges involved 
and procedure for admission is actually not everybody’s cup of tea. Hence, we work 
meticulously with top notch universities and institute in shaping the career of aspirants and 
physically manifesting the deep dreams of their parents. At bright bench we believe in 
simplicity, adherence to basic ethics and values that can mould the child future into a 
rewardable career. We are known for excellence in providing varied services through our 
expert team members on the panel. </p>
 <p><strong> Team,</strong></p> 
<p>
    <strong> BrightBench </strong></p>


                </p>
               
                <p className="a-desc">
                      <h3 >Why Choose Us</h3>
                      <p className="a-sub">
                     <strong>BrightBench</strong>  is a recognised <strong>Charitable</strong>  Indian Education Consulting firm– we help 
students for successful career counselling, admission at leading education institutions across 
India on free basis. always looking to set exemplary quality with uncharged service 
standards. We aim to give you extra value from the services you take and enrich our own 
value from our experience with you.
                      </p>
                {/* <ul className="a-desc-list">
               
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>BAchelor's in Engineering</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>BAchelor's in Management</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>BAchelor's in Medical</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>BAchelor's in Medical & Surgen</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>BAchelor's in Homeopath</li>
                  <li><span style={{fontSize:'17px',color:'darkblue'}}>&#9673;</span>ILETS,TOFEL,GRE,GMAT,SAT</li>
                  
                 
                 
                </ul> */}
                </p>
              
            </div>
          
        </div>
        </>
    )
}

export default About
