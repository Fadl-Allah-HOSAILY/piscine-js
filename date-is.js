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

function isBefore(date1, date2){
    return date1 < date2
}

function isAfter(date1, date2){
    return date1 > date2
}

function isFuture(date){
    if (!isValid(date))return false;
    return !isPast(date)
}

function isPast(date){
    const now = Date.now()
    if ((isValid(date)) && (isBefore(now))) return true; 
}