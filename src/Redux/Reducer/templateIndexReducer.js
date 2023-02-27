let initialState = "template1";
let changeTemplateIndex = (state = initialState, action) => {
  switch (action.type) {
    case "selectTemplate":
      return action.payload;
    default:
      return state;
  }
};

export default changeTemplateIndex;
