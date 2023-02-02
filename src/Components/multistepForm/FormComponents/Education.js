import React from 'react';
import {changeDegree,changeEndYear,changeStartYear,changeType,changeUniversity} from "../../../Redux/Action/education";


const Education = (props) => {
    let changeEducation = (e,changedParameter) => {
        props.dispatch(changedParameter(e.target.value));
    }
    return (
        <>
            <div className="educationForm">
                <hr />
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="inputLastName" className="form-label text-secondary">Type</label>
                        <select className="form-select  mb-3" onChange={(e)=>changeEducation(e,changeType)} >
                            <option selected>select type of education</option>
                            <option value={"Under Graduation"}>Under Graduation</option>
                            <option value={"Post Graduation"}>Post Graduation</option>
                            <option value={"Diploma"}>Diploma</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="inputUniversity" className="form-label  text-secondary">University</label>
                        <select className="form-select  mb-3" onChange={(e)=>changeEducation(e,changeUniversity)} >
                            <option selected>Select University</option>
                            <option value={"Pune University"}>Pune University</option>
                            <option value={"Delhi University"}>Delhi University</option>
                            <option value={"Nagpur University"}>Nagput University</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="inputDegree" className="form-label  text-secondary">Degree</label>
                        <select className="form-select  mb-3" onChange={(e)=>changeEducation(e,changeDegree)} >
                            <option selected>Select Degree</option>
                            <option value={"Bachelor Of Engineering"}>Bachelor Of Engineering</option>
                            <option value={"Bachelor Of Arts"}>Bachelor Of Arts</option>
                            <option value={"Bachelor Of Commerce"}>Bachelor Of Commerce</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="inputStartYear" className="form-label  text-secondary">Start Year</label>
                        <input type="month" name="Start year" className="form-control " onChange={(e)=>changeEducation(e,changeStartYear)} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="inputEndYear" className="form-label  text-secondary">End Year</label>
                        <input type="month" name="End year" className="form-control " onChange={(e)=>changeEducation(e,changeEndYear)} />
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Education