function isFriday(date){
    let newDate = new Date(date)
    if (newDate.getDay() === 5) return true 
    return false
}
function isWeekend(date){
    let newDate = new Date(date)
    if ((newDate.getDay() === 6) || (newDate.getDay() === 0)) return true 
    return false
}

function isLeapYear(date){
    let newDate = new Date(date)
    if (newDate.getFullYear() % 4 === 0)return true
    return false
}

function isLastDayOfMonth(date){
    let nextMonth = new Date(date.getFullYear(), date.getMonth()+1,1)
    let isLastDayOfMonth = new Date(nextMonth - 1)
    if (date.getDate() === isLastDayOfMonth.getDate())return true
    return false
}
