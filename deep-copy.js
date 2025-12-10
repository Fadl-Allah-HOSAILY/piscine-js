function deepCopy(data) {
    let res
    if (Array.isArray(data)) {
        res = []
        for (let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i])) {
                res.push(deepCopy(data[i]))
            } else {
                res.push(data[i])
            }
        }
    } else {
        res = {}
        for (const key in data) {
            if (data[key] && typeof (data[key]) === "object" && (!Array.isArray(data[key]))) {
                res[key] = deepCopy(data[key])
            } else {
                res[key] = data[key]
            }
        }
    }
    return res
}