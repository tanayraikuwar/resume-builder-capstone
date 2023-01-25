let changeType = (value) => {
    return{
        type:"changeType",
        payload:value
    }
}

let changeUniversity = (value) => {
    return{
        type:"changeUniversity",
        payload:value
    }
}

let changeDegree = (value) => {
    return{
        type:"changeDegree",
        payload:value
    }
}

let changeStartYear = (value) => {
    return{
        type:"changeStartYear",
        payload:value
    }
}

let changeEndYear = (value) => {
    return{
        type:"changeEndYear",
        payload:value
    }
}

export {changeDegree,changeEndYear,changeStartYear,changeType,changeUniversity}