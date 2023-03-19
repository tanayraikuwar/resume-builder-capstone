// import mainData from "../data";
import { useSelector } from "react-redux";
import "../../assets/allCSS/templateCSS/template4.css";

function Template4() {
  let Maindata = useSelector((store) => store);
  let data = Maindata.changeTemplateData;
  var first_name = data.PersonalInfo.name;
  var last_name = data.PersonalInfo.Lname;
  var f_letter = first_name.charAt(0);
  var l_letter = last_name.charAt(0);
  // console.log(data.experience)
  return (
    <>
      <div id="template4">
        <div className="header-4th">
          <div className="initilas-4th">

            {!data.PersonalInfo.image && (<div className="profile-4th">
              <span>
                {f_letter}
                {l_letter}
              </span>
            </div>)}

            {data.PersonalInfo.image && (<img
              src={URL.createObjectURL(data.PersonalInfo.image)}
              alt="Thumb"
              className="temp4Img"
            />)}
          </div>
          <div className="headerBlockTemp-4th">
            <div>
              <h2>
                {data.PersonalInfo.name} {data.PersonalInfo.Lname}
              </h2>
              <p style={{ fontWeight: "bold" }}>{data.PersonalInfo.heading}</p>
            </div>
          </div>
        </div>
        <div className="body__part-4th">
          <div className="template__left-4th">
            <div className="summary-4th">
              <h3 className="h3-4th">SUMMARY : </h3>
              <p>{data.PersonalInfo.objective}</p>
            </div>
            <hr className="hr-4th" />
            <div className="keySkills-4th">
              <h3 className="h3-4th">KEY SKILLS : </h3>
              <ul>
                {data.keySkills.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </div>
            <hr className="hr-4th" />

            <div className="proffExperience-4th">
              <div>
                <h3 className="h3-4th">WORK EXPERIENCE : </h3>
              </div>
              <div className="experience-4th">
                <div>
                  {data.experience.map((value) => {
                    return (
                      <>
                        <ul>
                          <li>
                            <h4>{value.title}</h4>
                          </li>

                          <ul>
                            <li className="li__values-4th">
                              Organization Name : {value.organization}
                            </li>
                            <li className="li__values-4th">
                              {value.startDate}-{value.endDate}
                            </li>
                            {/* <li className="li__values">{value.description}</li> */}
                          </ul>
                        </ul>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="hr-4th" />
            <div className="education-4th">
              <h3 className="h3-4th">EDUCATION : </h3>
              <div className="eduDetails-4th">
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
          <div className="template__right-4th">
            <div className="contDetail-4th">
              <h3 className="h3-4th">CONTACT : </h3>
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
            <hr className="hr-4th" />
            <div className="keySkills-4th">
              <h3 className="h3-4th">KEY SKILLS : </h3>
              <ul>
                {data.keySkills.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </div>
            <hr className="hr-4th" />
          </div>
        </div>
        <div className="footer-4th">
          <h3 className="h3-4th">DECLERATION : </h3>
          <p>
            I,
            <span>
              {data.PersonalInfo.name} {data.PersonalInfo.Lname}
            </span>
            <span></span> solemnly declare that all the above information is
            correct to the best of my knowledge and belief.
          </p>
          <h5>
            {data.PersonalInfo.name} {data.PersonalInfo.Lname}
          </h5>
        </div>
      </div>
      <hr className="hr-4th" />
    </>
  );
}

export default Template4;
