function invert(obj){
    const reverseObj = {}
    for (const key in obj) {
        const value = obj[key]
        reverseObj[value] = key
    }
    return reverseObj
}