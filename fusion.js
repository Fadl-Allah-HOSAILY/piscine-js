function fusion(obj1, obj2){
    const keys1 = Object.keys(obj1)
    const value1 = Object.values(obj1)
    const keys2 = Object.keys(obj2)
    const value2 = Object.values(obj2)
    const newObj = {}
    for (let i = 0; i < keys1.length; i++) {
        let keyI = keys1[i]
        let keyJ = keys2[i]
        let valueI = value1[i]
        let valueJ = value2[i]
        if (keys2.includes(keyI)){
            if ((Array.isArray(valueI)) && (Array.isArray(valueJ))){
                newObj[keyI] = [...valueI, ...valueJ]
            }else if ((typeof(valueI) === "string") && typeof(valueJ) === "string"){
                newObj[keyI] = valueI + ' ' + valueJ
            }else if ((typeof(valueI) === "number") && typeof(valueJ) === "number"){
                newObj[keyI] = valueI + valueJ
            }else if (((typeof(valueI) === "object") && (!Array.isArray(valueI))) && ((typeof(valueJ) === "object") && (!Array.isArray(valueJ)))){
                newObj[keyI] = fusion(obj1[keyI], obj2[keyJ])
            }else {
                newObj[keyI] = valueJ
            }
        }else {
            newObj[keyI] = valueI
        }
    }
    const keys = Object.keys(newObj)
    for (let i = 0; i < keys2.length; i++) {
        let keyJ = keys2[i]
        let valueJ = value2[i]
        let key = keys[i]
        if (!keys2.includes(key)) {
            newObj[keyJ] = valueJ
        }
    }
    return newObj
}

console.log(fusion({ nbr: 12 }, { nbr: 23 }));
