import { React, useState } from "react"
import PersonalInfo from "./FormComponents/PersonalInfo";
import Experience from "./FormComponents/Experience";
import Skills from "./FormComponents/Skills";
import Education from "./FormComponents/Education";
import "../../assets/allCSS/formCSS/mainForm.css";
import { useDispatch, useSelector } from "react-redux";


// this component is skeleton of form !! 


let Form = () => {
    const [page, setPage] = useState(0);
    let dispatch = useDispatch();
    let MainData = useSelector(data => data).changeTemplateData;

    //below function is for displaying different step's of forms 
    const pageDisplay = () => {
        switch (page) {
            case 0:
                return <PersonalInfo dispatch={dispatch} mainData={MainData} setPage={setPage} /> //we send props to different childerns 
            case 1:
                return <Experience dispatch={dispatch} mainData={MainData} setPage={setPage}/> //same here
            case 2:
                return <Education dispatch={dispatch} mainData={MainData} setPage={setPage}/>
            case 3:
                return <Skills dispatch={dispatch} mainData={MainData} setPage={setPage}/>

            default:
                break;
        }
    }

    let FormActive = "form-nav-head form-nav-head-active"; //to toggle between active and deactive navbar tab in left section
    let FormDeactive = "form-nav-head"

    
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
                    {/* <div className="formHeader">
                        {pageHeading[page]}
                    </div>
                    <br /> */}
                    <div className="formBody">
                        {pageDisplay()}
                    </div>
                    <br />
                    
                </div>
            </div>
        </>
    )
}

export default Form;