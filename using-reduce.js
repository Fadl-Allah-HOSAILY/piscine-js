function adder(arr, ...args) {
    const sumArr = arr.reduce((sum, num) => sum + num, 0)
    const sumArgs = args.reduce((sum, num) => sum + num, 0)
    return sumArr + sumArgs
}

function sumOrMul(arr) {
    return arr.reduce((res, num) => {
        if (num % 2 === 0) {
            res.mul *= num
        } else {
            res.sum += num
        }
        return res
    }, { sum: 0, mul: 1 })
}

function funcExec(arr) {
    return arr.reduce((res, func) => {
        res = func(res)
        return res
    }, 0)
}