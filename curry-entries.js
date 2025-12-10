function defaultCurry(firstObj) {
    return function (secondObjt) {
        let newObj = {}
        const keys1 = Object.keys(firstObj)
        const keys2 = Object.keys(secondObjt)
        for (const key of keys1) {
            if (keys2.includes(key)) {
                newObj[key] = secondObjt[key]
            } else {
                newObj[key] = firstObj[key]
            }
        }
        const keys3 = Object.keys(newObj)
        for (const key of keys2) {
            if (!keys3.includes(key)) {
                newObj[key] = secondObjt[key]
            }
        }
        return newObj
    }
}

function mapCurry(func) {
    return function (obj) {
        let newObj = {}
        const entries = Object.entries(obj)
        entries.forEach(([k, v]) => {
            const [newKey, newValue] = func([k, v])
            newObj[newKey] = newValue
        });
        return newObj
    }
}

function reduceCurry(func) {
    return function (obj, init) {
        let acc = init
        const entries = Object.entries(obj)
        entries.forEach(([k, v]) => {
            acc = func(acc, [k, v])
        });
        return acc
    }
}

function filterCurry(func) {
    return function (obj) {
        let newObj = {}
        const entries = Object.entries(obj)
        entries.forEach(([k, v]) => {
            if (func([k, v])) newObj[k] = v
        });
        return newObj
    }
}

function reduceScore(personnel, init) {
    return reduceCurry((acc, [k, v]) => {
        if (v.isForceUser) {
            return acc + v.pilotingScore + v.shootingScore
        } else {
            return acc
        }
    })(personnel, init)
}


function filterForce(personnel) {
    return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel)
}

function mapAverage(personnel){
    return mapCurry(([k, v]) => {
        const averageScore = (v.pilotingScore + v.shootingScore) / 2
        return [k, {...v, averageScore}]
    })(personnel)
}