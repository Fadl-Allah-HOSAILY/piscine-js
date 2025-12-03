function isValid(date){
    const newDate = new Date(date).toString
    if (newDate === "Invalid Date"){
        return false
    }
    return true
}

