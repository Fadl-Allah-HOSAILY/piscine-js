function filterEntries(obj, func) {
    const filtred = {}
    const pairs = Object.entries(obj)
    for (let i = 0; i < pairs.length; i++) {
        let [key, value] = pairs[i]
        if (func([key, value])) {
            filtred[key] = value
        }
    }
    return filtred
}

function mapEntries(obj, func) {
    const mapped = {}
    const pairs = Object.entries(obj)
    for (let i = 0; i < pairs.length; i++) {
        let [key, value] = func(pairs[i])
        mapped[key] = value
    }
    return mapped
}

function reduceEntries(obj, func, init) {
    const pairs = Object.entries(obj)
    let startIndex = 0
    if (init === undefined) {
        init = pairs[0]
        startIndex = 1
    }
    let reduce = init
    for (let i = startIndex; i < pairs.length; i++) {
        reduce = func(reduce, pairs[i])
    }
    return reduce
}

function totalCalories(cart) {
    return reduceEntries(cart, (acc, [k, v]) => {
        return +(acc + (v / 100) * nutritionDB[k].calories).toFixed(1)
    }, 0)
}

function lowCarbs(cart) {
    return filterEntries(cart, ([k, v]) => {
        const carbsTotal = (v / 100) * nutritionDB[k].carbs
        return carbsTotal < 50
    })
}

function cartTotal(cart) {
    return mapEntries(cart, ([k, v]) => {
        let newObj = {}
        for (let nutriment in nutritionDB[k]) {
            newObj[nutriment] = +((v / 100) * nutritionDB[k][nutriment].toFixed(1))
        }
        return [k, newObj]
    })
}