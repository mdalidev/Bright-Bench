import React from 'react'
import { eduData } from '../../Data/edudata'
import Seperator from '../Seperator/Seperator'
import './Qualif.css'
import QualifCard from './QualifCard';

function Qualif() {
    const data=eduData;
    return (
        <div id="education" className="work">
            <Seperator/>
            <lable className="section-title">Education<i class="fas fa-user-graduate"></i></lable>
            <div className="work-list">
                {
                    data.map((item)=>{
                        return(
                            <QualifCard item={item}/>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Qualif
