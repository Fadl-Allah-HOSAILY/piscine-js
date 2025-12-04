function matchCron(cron, date){
    let checks = cron.split(" ")
    let count = 0
    if (checks[0] === String(date.getMinutes()) || checks[0] === "*") count++
    if (checks[1] === String(date.getHours()) || checks[1] === "*") count++
    if (checks[2] === String(date.getDate()) || checks[2] === "*") count++
    if (checks[3] === String(date.getMonth() + 1) || checks[3] === "*") count++
    if (checks[4] === String(date.getDay()) || checks[4] === "*") count++
    if (checks.length === count)return true
    return false
}
