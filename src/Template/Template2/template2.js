// import mainData from "../data";
import { useSelector } from "react-redux";
import "./template2.css";

function Template2() {
  let Maindata = useSelector((store) => store);
  let data = Maindata.changeTemplateData;
  // console.log(data.experience)
  return (
    <>
      <div id="template">
        <div className="header1">
          <div className="headerBlockTemp2">
            <div>
              <h2>
                {data.PersonalInfo.name} {data.PersonalInfo.Lname}
              </h2>
              <p style={{ fontWeight: "bold" }}>{data.PersonalInfo.heading}</p>
            </div>
          </div>
        </div>
        <div className="body__part">
          <div className="template__left">
            <div className="summary">
              <h3 className="h3">SUMMARY : </h3>
              <p>{data.PersonalInfo.objective}</p>
            </div>
            <hr className="hr" />
            <div className="keySkills">
              <h3 className="h3">KEY SKILLS : </h3>
              <ul>
                {data.keySkills.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </div>
            <hr className="hr" />

            <div className="proffExperience2">
              <div>
                <h3 className="h3">WORK EXPERIENCE : </h3>
              </div>
              <div className="experience">
                <div>
                  {data.experience.map((value) => {
                    return (
                      <>
                        <ul>
                          <li>
                            <h4>{value.title}</h4>
                          </li>

                          <ul>
                            <li className="li__values">
                              Organization Name : {value.organization}
                            </li>
                            <li className="li__values">
                              {value.startDate}-{value.endDate}
                            </li>
                            <li className="li__values">{value.description}</li>
                          </ul>
                        </ul>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="hr" />
            <div className="education1">
              <h3 className="h3">EDUCATION : </h3>
              <div className="eduDetails">
                <div>
                  <ul>
                    <li>Type : {data.education.type}</li>
                    <li>University : {data.education.university}</li>
                    <li>Degree : {data.education.degree}</li>
                    <li>
                      {data.education.startYear} - {data.education.endYear}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="template__right">
            <div className="contDetail">
              <h3 className="h3">CONTACT : </h3>
              <ul>
                <li>
                  Email : <span>{data.PersonalInfo.contactDetail.email}</span>
                </li>
                <li>
                  Mobile : <span>{data.PersonalInfo.contactDetail.mobile}</span>
                </li>
                <li>
                  Address :{" "}
                  <span> {data.PersonalInfo.contactDetail.address}</span>
                </li>
                <li>
                  City : <span> {data.PersonalInfo.contactDetail.city}</span>
                </li>
                <li>
                  State : <span> {data.PersonalInfo.contactDetail.state}</span>
                </li>
                <li>
                  Postal code :{" "}
                  <span> {data.PersonalInfo.contactDetail.PostalCode}</span>
                </li>
              </ul>
            </div>
            <hr className="hr" />
            <div className="keySkills">
              <h3 className="h3">KEY SKILLS : </h3>
              <ul>
                {data.keySkills.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </div>
            <hr className="hr" />
          </div>
        </div>
        <div className="footer">
          <h3 className="h3">DECLERATION : </h3>
          <p>
            I,
            <span>
              {data.PersonalInfo.name} {data.PersonalInfo.Lname} 
             </span>
            <span></span> solemnly declare that all the above information is correct to the
            best of my knowledge and belief.
          </p>
          <h5>
            ( {data.PersonalInfo.name} {data.PersonalInfo.Lname} )
          </h5>
        </div>
        <hr className="hr" />
        {/* <hr className="hr" /> */}
      </div>
    </>
  );
}

export default Template2;
