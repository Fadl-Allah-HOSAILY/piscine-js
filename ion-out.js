function ionOut(str){
    const reg = /\w*t(?=ion)\w*/g;
    let arr = str.match(reg) || []
    return arr
}