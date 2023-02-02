import {React,useState} from 'react'
import {addSkills,removeSkills} from '../../../Redux/Action/skills';

const Skills = (props) => {
    const [Skills,setSkills] = useState();
    return (
        <>
            <div className="skillForm">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <input type="text" className="form-control " placeholder="add additional skills"
                        onChange={(e)=>setSkills(e.target.value)} />
                    </div>
                    {/* <div className="col-md-6 mb-4">
                        <input type="text" className="form-control " placeholder="add additional skills" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <input type="text" className="form-control " placeholder="add additional skills" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <input type="text" className="form-control " placeholder="add additional skills" />
                    </div> */}
                </div>
                <div className='grid'>
                <button className="g-col-3 btn btn-outline-primary" onClick={()=>props.dispatch(addSkills(Skills))} >add Skills</button>
                <button className="g-col-3 btn btn-outline-danger" onClick={()=>props.dispatch(removeSkills(Skills))} >Remove Skills</button>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Skills