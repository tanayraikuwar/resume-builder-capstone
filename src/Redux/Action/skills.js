let addSkills = (value) => {
    return{
        type:"addSkills",
        payload:value
    }
}

let removeSkills = (value) => {
    return{
        type:"removeSkills",
        payload:value
    }
}

export {addSkills,removeSkills};
