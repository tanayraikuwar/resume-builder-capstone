import mainData from "../../Template/data"


let initialState = mainData;
console.log(initialState);
let changeTemplateData = (state = initialState, action) => {
  // to change Personal Info
  switch (action.type) {
    case "changeName":
      state.PersonalInfo.name = action.payload;
      return { ...state };

    case "changeLname":
      state.PersonalInfo.Lname = action.payload;
      return { ...state };

    case "changeHeading":
      state.PersonalInfo.heading = action.payload;
      return { ...state };

    case "changeEmail":
      state.PersonalInfo.contactDetail.email = action.payload
      return { ...state };

    case "changeMobile":
      state.PersonalInfo.contactDetail.mobile = action.payload
      return { ...state };

    case "changeAddress":
      state.PersonalInfo.contactDetail.address = action.payload
      return { ...state };

    case "changeCity":
      state.PersonalInfo.contactDetail.city = action.payload
      return { ...state };

    case "changeState":
      state.PersonalInfo.contactDetail.state = action.payload
      return { ...state };

    case "changePostalCode":
      state.PersonalInfo.contactDetail.PostalCode = action.payload
      return { ...state };

    case "changeObjective":
      state.PersonalInfo.objective = action.payload
      return { ...state };

    // to change in Professional Experience

    case "changeTitle":
      state.experience[state.experience.length - 1].title = action.payload;
      return { ...state };

    case "changeOrganization":
      state.experience[state.experience.length - 1].organization = action.payload;
      return { ...state };

    case "changeStartDate":
      state.experience[state.experience.length - 1].startDate = action.payload;
      return { ...state };

    case "changeEndDate":
      state.experience[state.experience.length - 1].endDate = action.payload;
      return { ...state };

    case "addExperience":
      state.experience.push({});
      console.log(state.experience)
      return { ...state };

    case "removeExperience":
      state.experience.pop();
      return { ...state };

    //education starts here

    case "changeType":
      state.education.type = action.payload;
      return { ...state };

    case "changeUniversity":
      state.education.university = action.payload;
      return { ...state };

    case "changeDegree":
      state.education.degree = action.payload;
      return { ...state };

    case "changeStartYear":
      state.education.startYear = action.payload;
      return { ...state };

    case "changeEndYear":
      state.education.endYear = action.payload;
      return { ...state };


    case "addSkills":
      state.keySkills.push(action.payload);
      return { ...state };

    case "removeSkills":
      state.keySkills.pop();
      return { ...state };

    default:
      return state;
  }
};

export default changeTemplateData;
