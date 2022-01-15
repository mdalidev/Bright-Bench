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
                <h1 className="pl-title">Work's & Projects.</h1>
                <p className="pl-desc">
                    Currently, I am working on a kitchen-ecommerce's website and mobile app which uses MERN stack and react Native for android development.And also there is list of few projects which i have completed recently and many more comming soon....
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
