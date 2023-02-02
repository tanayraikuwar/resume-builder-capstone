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

let changeStartDate = (value) => {
    return{
        type:"changeStartDate",
        payload:value
    }
}

let changeEndDate = (value) => {
    return{
        type:"changeEndDate",
        payload:value
    }
}

let addExperience = () => {
    return{
        type:"addExperience"
    }
} 

let removeExperience = () => {
    return{
        type:"removeExperience"
    }
}

export {changeTitle , changeOrganization , changeStartDate , changeEndDate , addExperience , removeExperience};