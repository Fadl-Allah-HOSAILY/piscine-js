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
        const mapped = map(arr[i], i, arr)
        res.push(mapped)
    }
    return res
}