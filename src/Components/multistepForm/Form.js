import { React, useState } from "react"
import PersonalInfo from "./FormComponents/PersonalInfo";
import Experience from "./FormComponents/Experience";
import Skills from "./FormComponents/Skills";
import Education from "./FormComponents/Education";
import "./FormComponents/formCSS/mainForm.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// this component is skeleton of form !! 

let Form = () => {
    const [page, setPage] = useState(0);
    let pageHeading = ["Personal Information", "Work Experience", "Education Details", "Key Skills"]
    let dispatch = useDispatch();
    let MainData = useSelector(data => data).changeTemplateData;
    const pageDisplay = () => {
        switch (page) {
            case 0:
                return <PersonalInfo dispatch={dispatch} mainData={MainData} /> //we send props to different childerns 
            case 1:
                return <Experience dispatch={dispatch} mainData={MainData} /> //same here
            case 2:
                return <Education dispatch={dispatch} mainData={MainData} />
            case 3:
                return <Skills dispatch={dispatch} mainData={MainData} />

            default:
                break;
        }
    }

    let FormActive = "form-nav-head form-nav-head-active"; //to toggle between active and deactive navbar tab in left section
    let FormDeactive = "form-nav-head"

    // changes to toggle between "next" button and "Perview" button
    let activeButton = "btn btn-primary";
    let displayNoneButton = "d-none"
    return (
        <>
            <div className="d-flex flex-wrap justify-content-around my-5"> {/* we make it flexbox to arrange different divs */}
                <pre>{JSON.stringify(MainData)}</pre> {/*to show case our data*/}

                <div className="form-navbar">
                    {console.log(page)}
                    <h6 className={(page === 0) ? FormActive : FormDeactive} id="personalInfo" onClick={() => setPage(0)}>Presonal Information</h6>
                    <hr />
                    <h6 className={(page === 1) ? FormActive : FormDeactive} id="workExperience" onClick={() => setPage(1)}>Work Exprience</h6>
                    <hr />
                    <h6 className={(page === 2) ? FormActive : FormDeactive} id="education" onClick={() => setPage(2)}>Education</h6>
                    <hr />
                    <h6 className={(page === 3) ? FormActive : FormDeactive} id="keySkills" onClick={() => setPage(3)}>Key Skills</h6>
                </div>


                <div className="formMain">
                    <div className="formHeader">
                        {pageHeading[page]}
                    </div>
                    <br />
                    <div className="formBody">
                        {pageDisplay()}
                    </div>
                    <br />
                    <div className="formFooter btn-form-group">
                        <button
                            className="btn btn-outline-primary"
                            disabled={page === 0}
                            onClick={() => { setPage((presentPage) => presentPage - 1) }}>previous</button>
                        <button
                            className={page === (pageHeading.length - 1) ? displayNoneButton : activeButton}
                            // disabled={page === pageHeading.length - 1} 
                            onClick={() => { setPage((presentPage) => presentPage + 1) }}>Next</button>
                        <Link to={"/myresume/changePersonalDetails/preview"} className={page === (pageHeading.length - 1) ? activeButton : displayNoneButton}>Preview</Link>
                        {/* the above changes are made to land on preview page */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;