function get(src, path){
    let res = recursion(src, path.split("."))
    return res
}

function recursion(obj, path){
    if (typeof(obj[path[0]]) == "object" && obj[path[0]] != null){
        return recursion(obj[path[0]], path.slice(1))
    }
        return obj[path[0]]
}

// console.log(get({ key: 'value' }, 'key'));
