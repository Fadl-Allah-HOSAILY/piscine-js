function replica(target, ...source){
    for (let i = 0; i < source.length; i++) {
        let object = source[i]
        for (const key in object) {
            if ((object[key]) && (typeof(object[key]) === "object") && (!Array.isArray(object[key]))){
                replica(target[key], value);
            }else if (Array.isArray(value)){
                target[key] = [...value];
            }else {
                target[key] = value;
            }
        }
    }
    return target;
}