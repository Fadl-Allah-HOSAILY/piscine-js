function reverse(arr){
    if (Array.isArray){
    const array = []
    for (let i = arr.length-1; i >= 0 ; i--) {
        array.push(arr[i])
    }
    return array
    }
    let str = ""
    for (let i = arr.length-1; i >= 0 ; i--) {
        str += arr[i]
    }
    return str
}
