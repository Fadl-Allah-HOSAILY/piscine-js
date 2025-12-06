function adder(arr, ...args){
    const array = arr.concat(args)
    return array.reduce((sum, num) =>{
        return sum += num
    }, 0)
}

function sumOrMul(arr){
    return arr.reduce((res, num) =>{
        if (num % 2 === 0){
            res .mul *= num
        }else {
            res.sum += num
        }
        return res
    },{sum : 0, mul: 1})
}

function funcExec(arr){
    return arr.reduce((res, func) => {
        res = func(res) 
        return res
    }, 0)
}