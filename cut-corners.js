function trunc(x){
    let res = 0
    let isNegative = false 
    if (x < 0){
        isNegative = true
        x= -x 
    }
    while (x >= 1) {
        if (x > 100000000){
            res += 100000000
            x -= 100000000
        }else if (x > 100000){
            res += 100000
            x -= 100000
        }else if (x > 1000){
            res += 1000
            x -= 1000
        }else if (x > 10){
            res += 10
            x -= 10
        }else if (x > 10){
            res += 10
            x -= 10
        }else if (x < 10){
            res += 1
            x -= 1
        }
    }
    if (isNegative){
        return - res
    }
    return res
}
function floor(x){
    if (x > 0){
        return trunc(x)
    }else{
        return trunc(x) - 1
    }
}
function ceil(x){
    if (x > 0){
        return trunc(x) + 1
    }else{
        return trunc(x)
    }
}
function round(x){
    let isNegative = false 
    if (x < 0){
        isNegative = true
        x= -x 
    }
    let y = trunc(x)
    if (isNegative){
        if (y - x >= 0.5){
            return -ceil(y)
        }else{
            return -floor(y)
        }
    }
    if (y - x >= 0.5){
        return -ceil(y)
    }else{
        return -floor(y)
    }
}

const nums = [3.7]
// console.log(nums.map(round))
// console.log(nums.map(floor))
console.log(trunc(3.7))
// console.log(nums.map(ceil))
