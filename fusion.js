function fusion(obj1, obj2){
    const keys1 = Object.keys(obj1)
    const value1 = Object.values(obj1)
    const keys2 = Object.keys(obj2)
    const value2 = Object.values(obj2)
    const newObj = {}
    let found = false 
    for (let i = 0; i < keys1.length; i++) {
        let keyI = keys1[i]
        let valueI = value1[i]
        for (let j = 0; j < keys2.length; j++) {
            let keyJ = keys2[j]
            let valueJ = value2[j]
            if (keyI === keyJ){
                if ((Array.isArray(valueI)) && (Array.isArray(valueJ))){
                    newObj[keyI] = [...valueI, ...valueJ]
                    found = true
                }else if ((typeof(valueI) === "string") && typeof(valueJ) === "string"){
                    newObj[keyI] = valueI + ' ' + valueJ
                    found = true
                }else if ((typeof(valueI) === "number") && typeof(valueJ) === "number"){
                    newObj[keyI] = valueI + valueJ
                    found = true
                }else if (((typeof(valueI) === "object") && (!Array.isArray(valueI))) && ((typeof(valueJ) === "object") && (!Array.isArray(valueJ)))){
                    ewObj[keyI] = fusion(obj1[keyI], obj2[keyJ])
                    found = true
                }else {
                    newObj[keyI] = valueJ
                    found = true
                }
            }
        }
        if (!found){
            newObj[keyI] = valueI
        }
        found = false
    }
    return newObj
}

console.log(fusion({ a: 12, b: 2, c: 43 }, { a: 23, b: 2 }));
