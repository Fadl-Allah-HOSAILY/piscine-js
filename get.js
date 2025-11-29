function get(src, path){
    if (!path) {
        return src
    }
    let res = recursion(src, path.split("."))
    return res
}

function recursion(obj, path){
    if (path.length === 0){
        return obj
    }
    if (typeof(obj[path[0]]) == "object" && obj[path[0]] != null){
        return recursion(obj[path[0]], path.slice(1))
    }else if (obj[path[0]] == null){
        return undefined
    }else if (typeof(obj[path[0]]) == "function"){
        if (obj[path[1]] != undefined){
            return obj[path[0]].toString
        }
    }
        return obj[path[0]]
}

// const t = (x) => x + 1 
// // console.log(get({ key: 'value' }, 'key'));
// console.log(get({ a: [{ b: t }] },'a.0.b.toString'));
// console.log(get({ a: [{ b: t }] },'a.0.b'));
// // console.log(get({ a: [{ b: 10 }] }, "a.0.b"));
