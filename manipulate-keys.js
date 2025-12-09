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

function reduceKeys(obj, func, init){
    const keys = Object.keys(obj)
    let res
    let startIndex
    if (init === undefined) {
        res = keys[0]
        startIndex = 1
    } else {
        res = init
        startIndex = 0
    }
    for (let i = startIndex; i < keys.length; i++) {
        res = func(res, keys[i])
    }
    return res
}

const cart = { vinegar: 1, sugar: 1, oil: 1, onion: 1, garlic: 1, paprika: 1 };

console.log(
    reduceKeys(cart, (acc, cr) => acc.concat(', ', cr))
);