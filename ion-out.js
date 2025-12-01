const reg = /\w*t(?=ion)\w*/g;
function ionOut(str){
    let arr = str.match(reg) || []
    return arr
}