function deepCopy(obj){
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    let newObj = {}
    for (let i = 0; i < values.length; i++) {
        if (Array.isArray([i])){
            newObj[keys[i]] = deepCopy(keys[i])
        }else{
            newObj[keys[i]] = values[i]
        }
    }
    return newObj
}