function ionOut(str){
    const reg = /\w*t(?=ion)\w*/g;
    let arr = str.match(reg) || []
    let array =[]
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i].replace("ion", ""))
    }
    return array
}
console.log(ionOut('attention, direction'));
