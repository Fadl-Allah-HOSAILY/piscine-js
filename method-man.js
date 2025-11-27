function words (str){
    const arr = str.split(" ")
    return arr 
}

function sentence(arr){
    const str = arr.join(" ")
    return str
}

function yell(str){
    return str.toUpperCase()
}

function whisper(str) {
    str = str.toLowerCase()
    return "*" + str + "*"
}

function capitalize(str){
    return yell(str[0]) + str.slice(1).toLowerCase()
}
