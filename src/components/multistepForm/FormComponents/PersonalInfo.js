import { React} from 'react'
import "../../../assets/allCSS/formCSS/personalInfo.css"
import {
    changeImage,
    changeName,
    changeLname,
    changeHeading,
    changeEmail,
    changeMobile,
    changeAddress,
    changeCity,
    changeState,
    changePostalCode,
    changeObjective,
} from "../../../Redux/Action/personalInfo";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';





const PersonalInfo = (props) => {

    let navigate = useNavigate();

    let imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            // setImageData(e.target.files[0]);
            props.dispatch(changeImage(e.target.files[0]))
            console.log(props.mainData.PersonalInfo.image)
        }
    }

    let changePersonalInfo = (event, changeParameter) => {
        props.dispatch(changeParameter(event)); //we use props send by parent Form.js
    }

    // const [imageData, setImageData] = useState(null);

    const { register, trigger, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let actions = [changeName, changeLname, changeHeading, changeEmail, changeMobile,
            changeAddress, changeCity, changeState, changePostalCode, changeObjective,];
        actions.forEach((action) => {
            switch (action) {
                case changeName:
                    changePersonalInfo(data.firstName, changeName)
                    break;

                case changeLname:
                    changePersonalInfo(data.lastName, changeLname)
                    break;

                case changeHeading:
                    changePersonalInfo(data.profession, changeHeading)
                    break;

                case changeEmail:
                    changePersonalInfo(data.email, changeEmail)
                    break;

                case changeMobile:
                    changePersonalInfo(data.mobileNumber, changeMobile)
                    break;

                case changeAddress:
                    changePersonalInfo(data.address, changeAddress)
                    break;

                case changeCity:
                    changePersonalInfo(data.city, changeCity)
                    break;

                case changeState:
                    changePersonalInfo(data.state, changeState)
                    break;

                case changePostalCode:
                    changePersonalInfo(data.postalCode, changePostalCode)
                    break;

                case changeObjective:
                    changePersonalInfo(data.objective, changeObjective)
                    break;
                default:
                    break;
            }
        })

        props.setPage((presentVal) => presentVal + 1);
    };
    // const onError = (errors) => alert(`some error occured`);
    return (
        <>
            <h4 className='text-center'>Personal Information</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <hr />
                <div className="pInfoContainer">
                    {props.mainData.PersonalInfo.image && (
                        <div className='previewImage mb-4'>
                            <img
                                src={URL.createObjectURL(props.mainData.PersonalInfo.image)}
                                alt="Thumb"
                            />
                        </div>
                    )}

                    <label>Choose File to Upload: </label>
                    <input type="file" className="form-control w-25" onChange={imageChange} accept="image/*" />


                    <div className="row mt-4">
                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputName" className="form-label">First Name</label>
                            <input type="text" className="form-control"
                                {...register("firstName", {
                                    required: "firstName is required",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "enter valid lastName"
                                    }
                                })}
                                onKeyUp={() => trigger("firstName")} />
                            {errors.firstName && (<small className='text-danger'>{errors.firstName.message}</small>)}
                            {/* changePersonalInfo is a function which accepts two argument "e" and "changeName" to change redux state */}
                            {/* and simmilarly all changes are made like this */}
                        </div>
                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control"
                                {...register("lastName", {
                                    required: "lastName is required",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "enter valid lastName"
                                    }
                                })}
                                onKeyUp={() => trigger("lastName")} />
                            {errors.lastName && (<small className='text-danger'>{errors.lastName.message}</small>)}
                        </div>

                        <div className="col-md-12 mb-5">
                            <label htmlFor="ProfessionName" className="form-label">Profession</label>
                            <input type="text" className="form-control"
                                {...register("profession", {
                                    required: "profession is required",
                                    pattern: {
                                        value: /^[a-z A-Z]+$[a-z A-Z]*/,
                                        message: "enter valid profession"
                                    }
                                })}
                                onKeyUp={() => trigger("profession")} />
                            {errors.profession && (<small className='text-danger'>{errors.profession.message}</small>)}
                        </div>

                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputEmail4" className="form-label">email</label>
                            <input type="email" className="form-control"
                                {...register("email", {
                                    required: "email is required",
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: "enter valid email"
                                    }
                                })}
                                onKeyUp={() => trigger("email")} />
                            {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                        </div>


                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputEmail4" className="form-label">Mobile</label>
                            <input type="tel" className="form-control"
                                {...register("mobileNumber", {
                                    required: "mobileNumber is required",
                                    pattern: {
                                        value: /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/,
                                        message: "enter valid mobile number"
                                    }
                                })}
                                onKeyUp={() => trigger("mobileNumber")} />
                            {errors.mobileNumber && (<small className='text-danger'>{errors.mobileNumber.message}</small>)}
                        </div>


                        <div className="col-12 mb-5">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"

                                {...register("address", {
                                    required: "address is required",
                                    pattern: {
                                        value: /^[a-z A-Z][a-z A-Z]*/,
                                        message: "enter valid address"
                                    }
                                })}
                                onKeyUp={() => trigger("address")} />
                            {errors.address && (<small className='text-danger'>{errors.address.message}</small>)}
                        </div>


                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputEmail4" className="form-label">City</label>
                            <input type="text" className="form-control"
                                {...register("city", {
                                    required: "city is required",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "enter valid city"
                                    }
                                })}
                                onKeyUp={() => trigger("city")} />
                            {errors.city && (<small className='text-danger'>{errors.city.message}</small>)}
                        </div>


                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputEmail4" className="form-label">State</label>
                            <input type="text" className="form-control"
                                {...register("state", {
                                    required: "state is required",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "enter valid state"
                                    }
                                })}
                                onKeyUp={() => trigger("state")} />
                            {errors.state && (<small className='text-danger'>{errors.state.message}</small>)}
                        </div>

                        <div className="col-md-6 mb-5">
                            <label htmlFor="inputEmail4" className="form-label">Postal Code</label>
                            <input type="text" className="form-control"
                                {...register("postalCode", {
                                    required: "postalCode is required",
                                    pattern: {
                                        value: /^\d{6}(-\d{5})?$/,
                                        message: "enter valid postal code"
                                    }
                                })}
                                onKeyUp={() => trigger("postalCode")} />
                            {errors.postalCode && (<small className='text-danger'>{errors.postalCode.message}</small>)}
                        </div>


                        <div className="col-md-12 mb-5">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Objective</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={4}

                                {...register("objective", { required: "objective is required" })}
                                onKeyUp={() => trigger("objective")} />
                            {errors.objective && (<small className='text-danger'>{errors.objective.message}</small>)}
                        </div>
                    </div>
                </div>

                <hr />

                <div className='formFooter btn-form-group'>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate(-1)}
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

export default PersonalInfo