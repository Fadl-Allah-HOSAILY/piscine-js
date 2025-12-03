function addWeek(date) {
    const epoch = new Date('0001-01-01');
    const diffMs = date.getTime() - epoch.getTime();
    const daysLeft = Math.floor(diffMs / 86400000)
    const dayIndex = daysLeft % 14;
    const week = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
        "secondFriday", "secondSaturday", "secondSunday"
    ];
    return week[dayIndex]
}

function timeTravel(obj){
    const date = obj.date 
    const hour =obj.hour
    const minute =obj.minute
    const second = obj.second

    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}
