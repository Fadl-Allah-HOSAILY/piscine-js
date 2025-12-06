function map(arr, func) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(func(arr[i], i, arr))
    }
    return array
}

function flatMap(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const mapped = map(func(arr[i], i, arr))
        if (Array.isArray(mapped)){
            res.push(...mapped)
        }else{
            res.push(mapped)
        }
    }
    return res
}
