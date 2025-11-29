function flat(arr){
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            temp.push(...flat(arr[i]))
        }else{
            temp.push(arr[i])
        }
    }return temp
}