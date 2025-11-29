function get(src, path){
    const pathParts = path.split(".")
    return pathParts
}

function recursion(obj, path){
    if (typeof(obj[path[0]]) == "object" && obj[path[0]] != null){
        return recursion(obj[path[0]], path.slice(1))
    }
        return obj[path[0]]
}