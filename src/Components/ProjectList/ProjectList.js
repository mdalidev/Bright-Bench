import React from 'react'
import './ProjectList.css'
import Project from '../Project/Project'
import {projects} from "../../Data/data"
import Seperator from '../Seperator/Seperator'
function ProjectList() {
    return (
        <>
        <Seperator/>
        <div id="projects" className="pl">
            

           
            <div className="pl-texts">
                <h1 className="pl-title">Our  Top University Partners</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum?
                </p>
            </div>
            <div className="pl-list">
               {projects.map((item)=>(
               <Project key={item.id} img={item.img} link={item.link} heading={item.heading}/>

                ))}
            
            </div> 
           
        </div>
        </>
    )
}

export default ProjectList
