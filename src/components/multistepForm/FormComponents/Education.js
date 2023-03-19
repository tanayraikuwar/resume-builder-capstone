import React from 'react';
import { changeDegree, changeEndYear, changeStartYear, changeType, changeUniversity } from "../../../Redux/Action/education";
import { useForm } from 'react-hook-form';

const Education = (props) => {
    let changeEducation = (e, changedParameter) => {
        props.dispatch(changedParameter(e));
    }

    let onSubmit = (data) => {
        let actions = [changeDegree, changeEndYear, changeStartYear, changeType, changeUniversity];
        actions.forEach((action) => {
            switch (action) {
                case changeType:
                    changeEducation(data.eduType, changeType)
                    break;

                case changeUniversity:
                    changeEducation(data.university, changeUniversity)
                    break;

                case changeDegree:
                    changeEducation(data.degree, changeDegree)
                    break;

                case changeStartYear:
                    changeEducation(data.startYear, changeStartYear)
                    break;

                case changeEndYear:
                    changeEducation(data.endYear, changeEndYear)
                    break;

                default:
                    break;
            }
        })
        props.setPage((presentPage) => presentPage + 1)
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <>
            <h4 className='text-center'>Education</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="educationForm">
                    <hr />
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="inputLastName" className="form-label text-secondary">Type</label>
                            <select className="form-select  mb-3"
                                {...register("eduType", {
                                    required: "Education Type is required",
                                })}
                            >
                                <option value={""} selected>select type of education</option>
                                <option value={"Under Graduation"}>Under Graduation</option>
                                <option value={"Post Graduation"}>Post Graduation</option>
                                <option value={"Diploma"}>Diploma</option>
                            </select>
                            {errors.eduType && (<small className='text-danger'>{errors.eduType.message}</small>)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="inputUniversity" className="form-label  text-secondary">University</label>
                            <select className="form-select  mb-3"
                                {...register("university", {
                                    required: "University is required",
                                })}

                            >
                                <option value={""} selected>Select University</option>
                                <option value={"Pune University"}>Pune University</option>
                                <option value={"Delhi University"}>Delhi University</option>
                                <option value={"Nagpur University"}>Nagpur University</option>
                            </select>
                            {errors.university && (<small className='text-danger'>{errors.university.message}</small>)}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="inputDegree" className="form-label  text-secondary">Degree</label>
                            <select className="form-select  mb-3"
                                {...register("degree", {
                                    required: "Degree is required",
                                })}

                            >
                                <option value={""} selected>Select Degree</option>
                                <option value={"Bachelor Of Engineering"}>Bachelor Of Engineering</option>
                                <option value={"Bachelor Of Arts"}>Bachelor Of Arts</option>
                                <option value={"Bachelor Of Commerce"}>Bachelor Of Commerce</option>
                            </select>
                            {errors.degree && (<small className='text-danger'>{errors.degree.message}</small>)}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="inputStartYear" className="form-label  text-secondary">Start Year</label>
                            <input type="month" name="Start year"
                                {...register("startYear", {
                                    required: "start year is required",
                                })}
                                className="form-control "

                            />
                            {errors.startYear && (<small className='text-danger'>{errors.startYear.message}</small>)}
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="inputEndYear" className="form-label  text-secondary">End Year</label>
                            <input type="month" name="End year"
                                {...register("endYear", {
                                    required: "End year  is required",
                                })}
                                className="form-control "

                            />
                            {errors.endYear && (<small className='text-danger'>{errors.endYear.message}</small>)}
                        </div>
                    </div>
                    <hr />
                </div>

                <div className='formFooter btn-form-group'>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => { props.setPage((presentPage) => presentPage - 1) }}
                    >previous</button>
                    <button
                        type='submit'
                        className={"btn btn-primary"}
                    >Next</button>
                </div>
            </form>
        </>
    )
}

export default Education