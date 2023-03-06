import  React  from 'react'
import { addSkills, removeSkills } from '../../../Redux/Action/skills';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Skills = (props) => {
    // const [Skills, setSkills] = useState();
    let skillLength = props.mainData.keySkills.length;
    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    let onSubmit = async(data) => {
        await props.dispatch(addSkills(data.keySkills));
        reset();
    }

    let onError = () => {
        alert("error occured!")
    }
    return (
        <>

            <div className="skillForm">
                <form onSubmit={handleSubmit(onSubmit,onError)}>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <input type="text" className="form-control "
                        {...register("keySkills", {
                            required: "Skills are required!",
                        })}
                        placeholder="add additional skills"/>
                    {errors.keySkills && (<small className='text-danger'>{errors.keySkills.message}</small>)}
                    </div>
                </div>
                <div className='grid d-flex justify-content-center align-items-center'>
                    <button type='submit' className="g-col-3 btn btn-outline-primary me-5">Add Skills</button>
                    <button className="g-col-3 btn btn-outline-danger ms-5"
                        onClick={(e) => {
                            e.preventDefault()
                            props.dispatch(removeSkills())
                        }
                        } >Remove Skills</button>
                </div>
                </form>


                <div className="d-flex justify-content-center">
                    <div className={`alert ${skillLength ? "alert-primary" : "alert-danger"} mt-4 w-50 d-flex justify-content-center 
                            align-items-center`}
                        style={{ height: "40px" }}>
                        Skills added {skillLength}
                    </div>
                </div>

                <hr />
            </div>

            <div className='formFooter btn-form-group'>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => { props.setPage((presentPage) => presentPage - 1) }}
                >previous</button>
                <Link
                    to={"/myresume/changePersonalDetails/preview"}
                    className={`btn btn-primary ${!skillLength && "disabled"}`}
                >Preview</Link>
            </div>
        </>
    )
}

export default Skills