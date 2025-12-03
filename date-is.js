function isValid(date){
    if (typeof(date) === 'string'){
        return false
    }
    const newDate = new Date(date).toString()
    if (newDate === "Invalid Date"){
        return false
    }
    return true
}

function isAfter(date1, date2){
    return date1 > date2
}

function isAfter(date1, date2){
    return date1 < date2
}

function isPast(date){
    const now = Date.now()
    if ((isValid(date)) && (isAfter(now))) return true; 
}