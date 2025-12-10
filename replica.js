function replica(target, ...source){
    for (let i = 0; i < source.length; i++) {
        let object = source[i]
        for (const key in object) {
            const value = object[key];
            if ( (Object.prototype.toString.call(value) === "[object Object]")&&(Object.prototype.toString.call(target[key]) === "[object Object]") ){
                if (target[key]!==undefined) {
                    replica(target[key], value);
                }
                replica(target, value);
            }else {
                target[key] = value;
            }
        }
    }
    return target;
}