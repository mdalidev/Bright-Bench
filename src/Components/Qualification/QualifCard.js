import React from 'react'
import './QualifCard.css';
function QualifCard({item}) {
    return (
        <div className="work-card">
            {/* <div className="work-logo">{item.img}</div> */}
            <img src={item.img}  className="work-logo"></img>
            <div className="work-info">
                <div className="work-desc">
                       <h3> <lable className="company-name">{item.school}</lable></h3>
                 <lable className="work-role">{item.role}</lable>
                </div>
          
              <div className="works-date">
                  <label>{item.dateJoining}</label>~<lable>{item.dateEnd}</lable>
              </div>
              <div className="work-desc">
                  <p>{item.work}</p>

              </div>
            </div>
        </div>
    )
}

export default QualifCard
