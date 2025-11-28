function cutFirst(str){
    let result = ""
    for (let i = 2; i < str.length; i++) {
        result += str[i]
    }
    return result
}
function cutLast(str){
    let result = ""
    for (let i = 0; i < str.length-2; i++) {
        result += str[i]
    }
    return result
}
function cutLast(str){
    let result = ""
    for (let i = 2; i < str.length-2; i++) {
        result += str[i]
    }
    return result
}
function keepFirst(str){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str[i]
        if (result.length == 2){
            return result
        }
    }
}
function keepLast(str){
    let result = ""
    for (let i = str.length - 2; i < str.length; i++) {
        result += str[i]
        return result    
    }
}
function keepFirstLast(str){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str[i]
        if (result.length == 2){
            break
        }
    }
    for (let i = str.length - 2; i < str.length; i++) {
        result += str[i]
        return result    
    }
    
}
