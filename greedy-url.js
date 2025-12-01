function getURL(url){
    const reg = /https?:\/\/\S+/g;
    return arr = url.match(reg) || [] 
}

function paramCount(url){
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "?"){
            const res = url.slice(i+1)
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