function slice(arr, startIn=0,endIn=arr.length){
    if (startIn<0){
        startIn= arr.length+startIn
    }
    if (endIn<0){
        endIn=arr.length+endIn
    }
    let array = []
    for (let i = startIn; i < endIn; i++){
        array.push(arr[i])
    }
    if (typeof(arr) == "string"){
        return array.join("")
    }
    return array
}

console.log(slice('abcdef', 2));
