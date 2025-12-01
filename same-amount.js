function sameAmount(str, reg1, reg2){
    const regexp1 = new RegExp(reg1.source, reg1.flags + 'g');
    const regexp2 = new RegExp(reg2.source, reg2.flags + 'g');
    let arr1 = str.match(regexp1) || []
    let arr2 = str.match(regexp2) || []
    return arr1.length === arr2.length
}
