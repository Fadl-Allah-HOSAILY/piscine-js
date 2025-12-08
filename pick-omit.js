function pick(obj, arg){
    const newObj = {}
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(arg)){
            for (let j = 0; j < arg.length; j++) {
                if (keys[i] === arg[j]){
                    newObj[keys[i]] = obj[keys[i]]
                }
            }
        }else{
            if (keys[i] === arg){
                newObj[keys[i]] = obj[keys[i]]
            }
        }
    }
    return newObj
}

function omit(obj, arg){
    const newObj = {}
    const keys = Object.keys(obj)
    let found = false
    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(arg)){
            for (let j = 0; j < arg.length; j++) {
                if (keys[i] === arg[j]){
                    found = true
                }
            }
            if (!found){
                newObj[keys[i]] = obj[keys[i]]
            }else {
                found = false
            }
        }else{
            if (keys[i] !== arg){
                newObj[keys[i]] = obj[keys[i]]
            }
        }
    }
    return newObj
}