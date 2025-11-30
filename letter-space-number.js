function letterSpaceNumber(str){
    const reg = /\b\d\b(?![a-zA-Z])/g;
    let arr = str.match(reg) 
    return arr
}