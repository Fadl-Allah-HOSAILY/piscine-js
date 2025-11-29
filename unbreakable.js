function split(str, flag){
    if (flag == undefined){
        flag = ""
    }
    const arr = []
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + flag.length) === flag){
            arr.push(str.slice(index, i))
            index = i + flag.length
        }
    }
    return arr
}

function join(arr, flag){
    if (flag == undefined){
        flag = ""
    }
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + flag
    }
    return str
    
}
