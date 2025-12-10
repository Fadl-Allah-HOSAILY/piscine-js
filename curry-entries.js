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