function letterSpaceNumber(str){
    const reg = /\b[a-zA-Z] \d\b(?![a-zA-Z])/g;
    let arr = str.match(reg) 
    return arr
}