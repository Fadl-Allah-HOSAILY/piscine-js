function flat(arr, index = 1){
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            temp.push(...flat(arr[i], index -1))
        }else{
            temp.push(arr[i])
        }
    }return temp
}

