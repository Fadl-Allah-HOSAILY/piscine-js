function first(arg){
    return arg[0]
}
function last(arg){
    return arg[length-1]
}
function kiss(arg){
    const a = first(arg)
    const b = last(arg)
    const arr = [b, a];
    return arr
}
