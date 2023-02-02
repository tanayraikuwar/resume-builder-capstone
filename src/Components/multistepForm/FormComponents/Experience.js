import React from 'react'
import {changeTitle , changeOrganization , changeStartDate , changeEndDate ,addExperience,removeExperience} from "../../../Redux/Action/experience";

 
const Experience = (props) => {
    
    let changeExperience = (e,changeParameter) => {
        props.dispatch(changeParameter(e.target.value))
    }

    return (
        <>
            <div className="experienceForm">
                <h4>Experience 1</h4>
                <hr />
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="jobTitle" className="form-label">Job Title</label>
                        <input type="text" className="form-control" placeholder="enter Job Title"
                        onChange={(e)=>changeExperience(e,changeTitle)} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="organizationName" className="form-label">Organization Name</label>
                        <input type="text" className="form-control" placeholder="enter Organization Name"
                        onChange={(e)=>changeExperience(e,changeOrganization)} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="startYear" className="form-label">Start Year</label>
                        <input type="month" className="form-control"
                        onChange={(e)=>changeExperience(e,changeStartDate)} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="endYear" className="form-label">End Year</label>
                        <input type="month" className="form-control"
                        onChange={(e)=>changeExperience(e,changeEndDate)} />
                    </div>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-outline-success" onClick={()=>props.dispatch(addExperience())}>add experience</button>
                        <button className="btn btn-outline-danger" onClick={()=>props.dispatch(removeExperience())}>remove experience</button>
                        {/* to add and remove experience we add these buttons */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience