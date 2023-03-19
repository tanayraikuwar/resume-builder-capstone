import React from 'react'
import { changeTitle, changeOrganization, changeStartDate, changeEndDate, addExperience, removeExperience } from "../../../Redux/Action/experience";
import { useForm } from 'react-hook-form';

const Experience = (props) => {

    let changeExperience = (e, changeParameter) => {
        props.dispatch(changeParameter(e))
    }

    // let checkAddExperience = () => {
    //     if(Object.keys(props.mainData.experience[props.mainData.experience.length - 1]).length===0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    const { register, trigger, formState: { errors }, handleSubmit, reset } = useForm();
    // console.log(props.mainData.experience.length);
    let experienceLength = props.mainData.experience.length;

    let onSubmit = async (data) => {
        let actions = [changeTitle, changeOrganization, changeStartDate, changeEndDate, addExperience, removeExperience];
        await props.dispatch(addExperience());
        actions.forEach((action) => {
            switch (action) {
                case changeTitle:
                    changeExperience(data.jobTitle, changeTitle)
                    break;

                case changeOrganization:
                    changeExperience(data.organizationName, changeOrganization)
                    break;

                case changeStartDate:
                    changeExperience(data.startYear, changeStartDate)
                    break;

                case changeEndDate:
                    changeExperience(data.endYear, changeEndDate)
                    break;

                default:
                    break;
            }
        })
        reset()
    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="experienceForm">
                    <h4 className='text-center'>Work Experience</h4>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="jobTitle" className="form-label">Job Title</label>
                            <input type="text" className="form-control" placeholder="enter Job Title"
                                onChange={(e) => changeExperience(e, changeTitle)}
                                {...register("jobTitle", {
                                    required: "job title is required",
                                })} 
                                onKeyUp={() => trigger("jobTitle")}/>
                            {errors.jobTitle && (<small className='text-danger'>{errors.jobTitle.message}</small>)}
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="organizationName" className="form-label">Organization Name</label>
                            <input type="text" className="form-control" placeholder="enter Organization Name"
                                onChange={(e) => changeExperience(e, changeOrganization)}
                                {...register("organizationName", {
                                    required: "Organization name is required",
                                })} 
                                onKeyUp={() => trigger("organizationName")}/>
                            {errors.organizationName && (<small className='text-danger'>{errors.organizationName.message}</small>)}
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="startYear" className="form-label">Start Year</label>
                            <input type="month" className="form-control"
                                onChange={(e) => changeExperience(e, changeStartDate)}
                                {...register("startYear", {
                                    required: "start year is required",
                                })} />
                            {errors.startYear && (<small className='text-danger'>{errors.startYear.message}</small>)}
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="endYear" className="form-label">End Year</label>
                            <input type="month" className="form-control"
                                onChange={(e) => changeExperience(e, changeEndDate)}
                                {...register("endYear", {
                                    required: "end year is required",
                                })} />
                            {errors.endYear && (<small className='text-danger'>{errors.endYear.message}</small>)}
                        </div>

                        <div className="d-flex justify-content-around">
                            <button
                                type='submit'
                                // disabled={checkAddExperience()} 
                                className="btn btn-outline-success"
                            //  onClick={(e) =>{
                            //     e.preventDefault()
                            //     props.dispatch(addExperience())
                            // }}
                            >add experience</button>
                            <button className="btn btn-outline-danger" onClick={() => props.dispatch(removeExperience())}>remove experience</button>
                            {/* to add and remove experience we add these buttons */}
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className={`alert ${experienceLength ? "alert-primary" : "alert-danger"} mt-4 w-50 d-flex justify-content-center 
                            align-items-center`}
                                style={{ height: "40px" }}>
                                experience added {props.mainData.experience.length}
                            </div>
                        </div>
                    </div>
                </div>

            </form>

            <hr />
            <div className='formFooter btn-form-group'>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => { props.setPage((presentPage) => presentPage - 1) }}
                >previous</button>
                <button
                    disabled={!experienceLength}
                    className={"btn btn-primary"}
                    onClick={() => {
                        props.setPage((presentPage) => presentPage + 1)
                    }}>Next</button>
            </div>
        </>
    )
}

export default Experience