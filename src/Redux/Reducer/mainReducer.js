import mainData from "../../Template/data"


let initialState = mainData;
console.log(initialState);
let changeTemplateData = (state = initialState, action) => {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          name: action.payload,
        },
      };

    case "changeLname":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          Lname: action.payload,
        },
      };

    case "changeHeading":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          heading: action.payload,
        },
      };

    case "changeEmail":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          contactDetail: {
            ...state.PersonalInfo.contactDetail,
            email: action.payload,
          },
        },
      };

    case "changeMobile":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          contactDetail: {
            ...state.PersonalInfo.contactDetail,
            mobile: action.payload,
          },
        },
      };

    case "changeAddress":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          contactDetail: {
            ...state.PersonalInfo.contactDetail,
            address: action.payload,
          },
        },
      };

    case "changeCity":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          contactDetail: {
            ...state.PersonalInfo.contactDetail,
            city: action.payload,
          },
        },
      };

    case "changeState":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          contactDetail: {
            ...state.PersonalInfo.contactDetail,
            state: action.payload,
          },
        },
      };

    case "changePostalCode":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          contactDetail: {
            ...state.PersonalInfo.contactDetail,
            PostalCode: action.payload,
          },
        },
      };

    case "changeObjective":
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          objective: action.payload,
        },
      };

    case "changeTitle":
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            ...state.experience[state.experience.length - 1],
            title: action.type,
          },
        ],
      };

    case "changeOrganization":
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            ...state.experience[state.experience.length - 1],
            organization: action.type,
          },
        ],
      };

    case "changeStartDate":
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            ...state.experience[state.experience.length - 1],
            startDate: action.type,
          },
        ],
      };

    case "changeEndDate":
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            ...state.experience[state.experience.length - 1],
            endDate: action.type,
          },
        ],
      };

    case "changeType":
      return {
        ...state,
        education: {
          ...state.education,
          type: action.payload,
        },
      };

    case "changeUniversity":
      return {
        ...state,
        education: {
          ...state.education,
          university: action.payload,
        },
      };

    case "changeDegree":
      return {
        ...state,
        education: {
          ...state.education,
          degree: action.payload,
        },
      };

    case "changeStartYear":
      return {
        ...state,
        education: {
          ...state.education,
          startYear: action.payload,
        },
      };

    case "changeEndYear":
      return {
        ...state,
        education: {
          ...state.education,
          endYear: action.payload,
        },
      };


    case "addSkills":
      state.keySkills.push(action.payload);
      break;
    
    default:
      return state;
  }
};

export default changeTemplateData;
