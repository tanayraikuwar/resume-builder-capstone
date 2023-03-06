let addSkills = (value) => {
    return{
        type:"addSkills",
        payload:value
    }
}

let removeSkills = () => {
    return{
        type:"removeSkills"
    }
}

export {addSkills,removeSkills};
