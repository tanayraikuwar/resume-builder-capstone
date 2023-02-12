// import mainData from "../data";
import { useSelector } from "react-redux";
import "./template4.css";

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
        <div className="name4">
          <div className="nameBlock4">
            <div>
              <h2 className="h24">
                {first_name} {last_name}
              </h2>
              <p style={{ fontWeight: "bold" }}>{data.PersonalInfo.heading}</p>
            </div>
          </div>
        </div>
        <div className="body__part4">
          <div className="sub__body4">
            <div className="summary4">
              <h3 className="h34">SUMMARY : </h3>

              <p>{data.PersonalInfo.objective}</p>
            </div>
            <div className="template4.1">
              <div className="avtar4">
                {/* <div className="sub__avtar4">
                  {f_letter} {l_letter}
                </div> */}
              </div>
            </div>
          </div>
          <hr className="hr4" />
          <div className="main__body">
            <div className="body__left4">
              <div className="proffExperience4">
                <div>
                  <h3 className="h34">WORK EXPERIENCE : </h3>
                </div>

                <div className="experience4">
                  <div>
                    {data.experience.map((value) => {
                      return (
                        <>
                          <ul>
                            <li>
                              <h4>{value.title}</h4>
                            </li>

                            <ul>
                              <li className="li__values4">
                                Organization Name : {value.organization}
                              </li>
                              <li className="li__values4">
                                {value.startDate}-{value.endDate}
                              </li>
                              <li className="li__values4">
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
              <div className="education4">
                <h3 className="h34">EDUCATION : </h3>
                <div className="eduDetails4">
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
            <div className="body__right4">
              <div className="keySkills4">
                <h3 className="h34">KEY SKILLS : </h3>

                <ul>
                  {data.keySkills.map((value) => {
                    return <li>{value}</li>;
                  })}
                </ul>
              </div>
              <div className="contDetail4">
                <h3 className="h34">CONTACT : </h3>
                <ul>
                  <li>
                    Email : <span>{data.PersonalInfo.contactDetail.email}</span>
                  </li>
                  <li>
                    Mobile :{" "}
                    <span>{data.PersonalInfo.contactDetail.mobile}</span>
                  </li>
                  <li>
                    Address :{" "}
                    <span> {data.PersonalInfo.contactDetail.address}</span>
                  </li>
                  <li>
                    City : <span> {data.PersonalInfo.contactDetail.city}</span>
                  </li>
                  <li>
                    State :{" "}
                    <span> {data.PersonalInfo.contactDetail.state}</span>
                  </li>
                  <li>
                    Postal code :{" "}
                    <span> {data.PersonalInfo.contactDetail.PostalCode}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer4">
          <h3 className="h34">DECLERATION : </h3>
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
        <hr className="hr4" />
        <hr className="hr4" />
      </div>
    </>
  );
}

export default Template4;
