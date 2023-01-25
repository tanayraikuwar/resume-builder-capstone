let changeName = (value) => {
  return {
    type: "changeName",
    payload: value,
  };
};

let changeHeading = (value) => {
    return{
        type : "changeHeading",
        payload : value
    }
}

let changeLname = (value) => {
  return {
    type: "changeLname",
    payload: value,
  };
};

let changeEmail = (value) => {
  return {
    type: "changeEmail",
    payload: value,
  };
};

let changeMobile = (value) => {
  return {
    type: "changeMobile",
    payload: value,
  };
};

let changeAddress = (value) => {
  return {
    type: "changeAddress",
    payload: value,
  };
};

let changeCity = (value) => {
  return {
    type: "changeCity",
    payload: value,
  };
};

let changeState = (value) => {
  return {
    type: "changeState",
    payload: value,
  };
};

let changePostalCode = (value) => {
  return {
    type: "changePostalCode",
    payload: value,
  };
};

let changeObjective = (value) => {
  return {
    type: "changeObjective",
    payload: value,
  };
};

export {
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
};
