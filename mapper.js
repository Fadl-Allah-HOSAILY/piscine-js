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
        const map = func(arr[i], i, arr)
        if (Array.isArray(map)){
            res.push(...map)
        }else{
            res.push(map)
        }
    }
    return res
}
