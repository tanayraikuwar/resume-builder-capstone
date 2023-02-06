import { React, useState } from 'react'
import "./formCSS/personalInfo.css"
import {
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


  
  

const PersonalInfo = (props) => {
    let imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageData(e.target.files[0]);
        }
    }

    let changePersonalInfo = (event,changeParameter)=>{
       props.dispatch(changeParameter(event.target.value)); //we use props send by parent Form.js
    }

    const [imageData, setImageData] = useState(null);
    
    // console.log(MainData);
    return (
        <>
            
            <div className="pInfoContainer">
                {imageData && (
                    <div className='previewImage mb-4'>
                        <img
                            src={URL.createObjectURL(imageData)}
                            alt="Thumb"
                        />
                    </div>
                )}

                <label>Choose File to Upload: </label>
                <input type="file" className="form-control mb-4 w-25" onChange={imageChange} accept="image/*" />

                <div className="row">
                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputName" className="form-label">First Name</label>
                        <input type="text" className="form-control" onChange={(e)=>changePersonalInfo(e,changeName)} />
                        {/* changePersonalInfo is a function which accepts two argument "e" and "changeName" to change redux state */}
                        {/* and simmilarly all changes are made like this */}
                    </div>
                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" onChange={(e)=>changePersonalInfo(e,changeLname)}  />
                    </div>

                    <div className="col-md-12 mb-5">
                        <label htmlFor="ProfessionName" className="form-label">Profession</label>
                        <input type="text" className="form-control" onChange={(e)=>changePersonalInfo(e,changeHeading)} />
                    </div>

                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputEmail4" className="form-label">email</label>
                        <input type="email" className="form-control" onChange={(e)=>changePersonalInfo(e,changeEmail)}/>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputEmail4" className="form-label">Mobile</label>
                        <input type="tel" className="form-control" onChange={(e)=>changePersonalInfo(e,changeMobile)} />
                    </div>
                    <div className="col-12 mb-5">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                         onChange={(e)=>changePersonalInfo(e,changeAddress)} />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputEmail4" className="form-label">City</label>
                        <input type="text" className="form-control" onChange={(e)=>changePersonalInfo(e,changeCity)} />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputEmail4" className="form-label">State</label>
                        <input type="text" className="form-control" onChange={(e)=>changePersonalInfo(e,changeState)} />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label htmlFor="inputEmail4" className="form-label">Postal Code</label>
                        <input type="text" className="form-control" onChange={(e)=>changePersonalInfo(e,changePostalCode)} />
                    </div>
                    <div className="col-md-12 mb-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} 
                        onChange={(e)=>changePersonalInfo(e,changeObjective)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo