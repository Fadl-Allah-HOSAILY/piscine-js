function indexOf(arr, value, opt){
    if (opt === undefined) {
    opt = 0;
    }
    if (opt < 0){
        opt = arr.length + opt;
        if (opt < 0) opt = 0
    }
    for (let i = opt; i < arr.length; i++){
        if (arr[i] === value){
            return i
        }
    }
    return -1
}
function lastIndexOf(arr, value, opt){
    if (opt === undefined) {
        opt = arr.length - 1;
    }if (opt < 0) {
        opt = arr.length + opt;
    }
    for (let i = opt; i >= 0; i--){
        if (arr[i] === value){
            return i
        }
    }
    return -1
}
function includes(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return true
        }
    }
    return false
}