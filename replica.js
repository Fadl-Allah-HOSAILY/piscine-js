const replica = (targetObj, ...object) => {
    for (const obj of object) {
        for (const key in obj) {
            if (!Array.isArray(targetObj[key]) && typeof targetObj[key] === "object" && !Array.isArray(obj[key]) && typeof obj[key] === "object") {
                replica(targetObj[key], obj[key])
            } else {
                targetObj[key] = obj[key]
            }
        }
    }
    return targetObj
}