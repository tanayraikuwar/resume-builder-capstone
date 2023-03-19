// import mainData from "../data";
import { useSelector } from "react-redux";
import "../../assets/allCSS/templateCSS/template3.css";

function Template3() {
  let Maindata = useSelector((store) => store);
  let data = Maindata.changeTemplateData;
  var first_name = data.PersonalInfo.name;
  var last_name = data.PersonalInfo.Lname;
  var f_letter = first_name.charAt(0);
  var l_letter = last_name.charAt(0);
  // console.log(data.experience)
  return (
    <>
      <div id="template-3rd">
        <div id="header-3rd">
          <div className="headerBlock-3rd">
            {!data.PersonalInfo.image && (
              <div className="profile-3rd">
                <span>
                  {f_letter}
                  {l_letter}
                </span>
              </div>
            )}

            {data.PersonalInfo.image && (<img
              src={URL.createObjectURL(data.PersonalInfo.image)}
              alt="Thumb"
              className="temp3Img"
            />)}
            <div>
              <h2>
                {data.PersonalInfo.name} {data.PersonalInfo.Lname}
              </h2>
              <p style={{ fontWeight: "bold", color: "black" }}>
                {data.PersonalInfo.heading}
              </p>
            </div>
          </div>
          <div className="contDetail-3rd">
            <ul>
              <li>Email : {data.PersonalInfo.contactDetail.email}</li>
              <li>Mobile : {data.PersonalInfo.contactDetail.mobile}</li>
              <li>Address : {data.PersonalInfo.contactDetail.address}</li>
              <li>City : {data.PersonalInfo.contactDetail.city}</li>
              <li>State : {data.PersonalInfo.contactDetail.state}</li>
              <li>
                Postal code : {data.PersonalInfo.contactDetail.PostalCode}
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="summary-3rd">
          <h2>Summary : </h2>
          <p>{data.PersonalInfo.objective}</p>
        </div>
        <hr />
        <div className="proffExperience-3rd">
          <div>
            <h3>Work experience : </h3>
          </div>
          <div className="experience-3rd">
            <div>
              {data.experience.map((value) => {
                return (
                  <>
                    <h4>{value.title}</h4>
                    <ul>
                      <li>Organization Name : {value.organization}</li>
                      <li>
                        {value.startDate}-{value.endDate}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="education-3rd">
          <h3>Education : </h3>
          <div className="eduDetails-3rd">
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
        <hr />
        <div className="keySkills-3rd">
          <h4>Key skills : </h4>
          <ul>
            {data.keySkills.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Template3;
