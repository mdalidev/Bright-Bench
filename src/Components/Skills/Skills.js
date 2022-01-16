import React from 'react'
import { SkillsData } from '../../Data/Skillsdata';
import Seperator from '../Seperator/Seperator';
import './Skills.css';
import SkillCard from './SkillCard';

import './Skills.css';
function Skills() {
    const data=SkillsData;
    return (
        <div id="skill" className="skills">
            <Seperator/>
            <label className="section-title"> Our Services</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label  className="skills-section-title">{item.type}</label>
                            <div className="skill-list">
                                {item.list.map((skill)=>{
                                    return(
                                       <SkillCard skill={skill}/>
                                )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
