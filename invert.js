function invert(obj){
    const reverseObj = {}
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
        reverseObj[values[i]] = keys[i]
    }
    return reverseObj
}

const obj = {
    a : 1,
    b : 2,
    c : 3
}

console.log(invert(obj));
