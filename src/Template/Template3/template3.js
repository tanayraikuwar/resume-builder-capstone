// import mainData from "../data";
import { useSelector } from "react-redux";
import "./template3.css";

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
      <div id="template3">
        <div className="body__part3">
          <div className="template__left3">
            <div className="avtar">
              
            </div>
            <div className="education3">
              <h3 className="h3">EDUCATION : </h3>
              <div className="eduDetails3">
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
            <div className="contDetail3">
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
          </div>
          <div className="template__right3">
            <div className="name3">
              <div className="nameBlock3">
                <div>
                  <h2>
                    {first_name} {last_name}
                  </h2>
                  <p style={{ fontWeight: "bold" }}>
                    {data.PersonalInfo.heading}
                  </p>
                </div>
              </div>
            </div>
            <div className="sub_body3">
              <div className="summary3">
                <h3 className="h3">SUMMARY : </h3>
                <hr className="hr3" />
                <p>{data.PersonalInfo.objective}</p>
              </div>

              <div className="proffExperience3">
                <div>
                  <h3 className="h3">WORK EXPERIENCE : </h3>
                </div>
                <hr className="hr3" />
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
                              <li className="li__values3">
                                Organization Name : {value.organization}
                              </li>
                              <li className="li__values3">
                                {value.startDate}-{value.endDate}
                              </li>
                              <li className="li__values3">
                                {value.description}
                              </li>
                            </ul>
                          </ul>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="keySkills3">
                <h3 className="h3">KEY SKILLS : </h3>
                <hr className="hr3" />

                <ul>
                  {data.keySkills.map((value) => {
                    return <li>{value}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer3">
          <h3 className="h3">DECLERATION : </h3>
          <p>
            I,{" "}
            <span>
              {first_name} {last_name}
            </span>{" "}
            solemnly declare that all the above information is correct to the
            best of my knowledge and belief.
          </p>
          <h5>
            ( {data.PersonalInfo.name} {data.PersonalInfo.Lname} )
          </h5>
        </div>
        <hr className="hr3" />
        <hr className="hr3" />
      </div>
    </>
  );
}

export default Template3;
