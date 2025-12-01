function getURL(dataSet){
    const reg = /https?:\/\/\S+/g;
    return arr = dataSet.match(reg) || [] 
}

function paramCount(dataSet){
    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i] === "?"){
            const res = dataSet.slice(i+1)
            const params = res.split("&")
            return params.length
        }
    }
    return 0
}

function greedyQuery(dataSet){
    let urls = getURL(dataSet)
    let arrUrls = []
    for (let i = 0; i < urls.length; i++) {
        if (paramCount(urls[i]) >= 3){
            arrUrls.push(urls[i])
        }
    }
    return arrUrls
}

function notSoGreedy(dataSet){
    let urls = getURL(dataSet)
    let arrUrls = []
    for (let i = 0; i < urls.length; i++) {
        if (paramCount(urls[i]) >= 2 && paramCount(urls[i]) <= 3){
            arrUrls.push(urls[i])
        }
    }
    return arrUrls
}