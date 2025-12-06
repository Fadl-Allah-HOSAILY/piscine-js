function filter(arr, func){
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)){
            array.push(arr[i])
        }
    }
    return array
}

function reject(arr, func){
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)){
            array.push(arr[i])
        }
    }
    return array
}

function partition(arr, func){
    let array = []
    let truthy = []
    let falsy = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)){
            truthy.push(arr[i])
        }else{
            falsy.push(arr[i])
        }
    }
    array.push(truthy)
    array.push(falsy)
    return array
}