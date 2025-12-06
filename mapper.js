function map(arr, func) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(func(arr[i], i, arr))
    }
    return array
}

function flatMap(arr, func) {
    const array = map(arr, func)
    let res = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            res.push(array[i][j])
        }
    }
    return res
}