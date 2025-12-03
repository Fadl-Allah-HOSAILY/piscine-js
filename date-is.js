function isValid(date){
    if (typeof(date) === 'string'){
        return false
    }
    const newDate = new Date(date).toString()
    console.log(newDate);
    
    if (newDate === "Invalid Date"){
        return false
    }
    return true
}

function isAfter(){
    
}