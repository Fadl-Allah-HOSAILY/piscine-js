function filterKeys(obj, func){
    const filtredObj = {}
    for (const key in obj) {
        if (func(key)){
            filtredObj[key] = obj[key]
        }
    }
    return filtredObj
}

function mapKeys(obj, func){
    const mappedObj = {}
    for (const key in obj) {
        mappedObj[func(key)] = obj[key]
    }
    return mappedObj
}

function reduceKeys(obj, func, init = ''){
    const keys = Object.keys(obj)
    let res = init
    for (let i = 0; i < keys.length; i++) {
        res = func(res, keys[i])
    }
    return res
}

