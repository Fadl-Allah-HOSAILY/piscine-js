function split(str, flag){
    if (flag == undefined){
        flag = ""
    }
    let arr = []
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + flag.length) === flag){
            arr = memoClean(str, arr, index, i)
            index = i + flag.length
            i = i + flag.length -1
        }
    }
    arr.push(str.slice(index));
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

function memoClean(str, arr, index, i){
    arr.push(str.slice(index, i))
    return arr
}
console.log(split('a b c', ' '));
