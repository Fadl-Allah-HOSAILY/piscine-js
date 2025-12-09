function filterValues(obj, func){
    let filtredObj = {}
    for(let key in obj){
        if(func(obj[key])){
            filtredObj[key] = obj[key]
        }
    }
    return filtredObj
}

function mapValues(obj, func){
    let mappedObj = {}
    for(let key in obj){
        mappedObj[key] = func(obj[key]) 
    }
    return mappedObj
}

function reduceValues(obj, func){
    const values = Object.values(obj)
    let res = 0
    for (let i = 0; i < values.length; i++) {            
        res += values
    }
    return res
}