function arrToSet(arr){
    const uniqueSet = new Set(arr);
    return uniqueSet
}
function arrToStr(arr){
    const str = arr.join("");
    return str
}
function setToArr(set){
    const arr = [...set];
    return arr
}
function setToStr(set){
    const arr = setToArr(set);
    const str = arrToStr(arr)
    return str
}
function strToArr(str){
    const arr = str.split("");
    return arr
}
function strToSet(str){
    const arr = strToArr(str);
    const uniqueSet = arrToSet(arr)
    return uniqueSet
}
function mapToObj(map){
    const obj = Object.fromEntries(map)
    return obj 
}
function objToArr(obj){
    const arr = Object.values(obj)
    return arr
}
function objToMap(obj){
    const map = new Map(Object.entries(obj))
    return map
}
function arrToObj(arr) {
  return { ...arr };
}
function strToObj(str){
    const arr = strToArr(str)
    const obj = arrToObj(arr)
    return obj
}
const arr = [1, 2, 1, 3]
console.log(arrToObj(arr))