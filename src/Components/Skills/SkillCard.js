import React from 'react'
import './Skillcard.css';
function SkillCard({skill}) {
    return (
        <div className="skill-card">
            <lable className="skill-name">{skill.name}</lable>
            <div className="skill-icon">{skill.icons}</div>
            
        </div>
    )
}

export default SkillCard
