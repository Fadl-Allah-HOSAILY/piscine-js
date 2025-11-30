function letterSpaceNumber(str){
    const reg = /[a-zA-z] \d\b(?![a-zA-Z])/g;
    let arr = str.match(reg) || []
    return arr
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.')); 
console.log(letterSpaceNumber('I like 7up.'));
