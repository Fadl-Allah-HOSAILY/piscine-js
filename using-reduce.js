function adder(arr, init = 0){
    return arr.reduce((sum, num) =>{
        return sum + num
    }, init)
}

function sumOrMul(arr, init = 0){
    return arr.reduce((res, num) =>{
        if (num % 2 === 0){
            res *= num
        }else {
            res += num
        }
        return res
    },init)
}

function funcExec(arr, init = 0){
    return arr.reduce((res, func) => {
        res = func(res) 
        return res
    }, init)
}