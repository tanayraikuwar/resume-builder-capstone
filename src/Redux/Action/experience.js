let changeTitle = (value) => {
    return{
        type:"changeTitle",
        payload:value
    }
}

let changeOrganization = (value) => {
    return{
        type:"changeOrganization",
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

export {changeTitle , changeOrganization , changeStartYear , changeEndYear};