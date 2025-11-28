function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}
function divide(a, b){
    let result = 0
    if (a > 0 && b > 0){
        while (a >= b) {
            a = a - b 
            result ++
        }
        return result
    }else if (a > 0 && b < 0){
        b = -b
        while (a >= b) {
            a = a - b 
            result ++
        }
        return -result
    }else if (a < 0 && b < 0){
        a = -a 
        b = -b 
        while (a >= b) {
            a = a - b 
            result ++
        }
        return result
    }else {
        a = -a
        while (a >= b) {
            a = a - b 
            result ++
        }
        return -result
    }
}
function modulo(a, b){
    while (a > b) {
        a = a - b
    }
    return a
}

