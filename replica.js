function replica(target, ...source){
    for (let i = 0; i < source.length; i++) {
        let object = source[i]
        for (const key in object) {
            const value = object[key];
            if ((object[key]) && (Object.prototype.toString.call(value) === "object") && (!Array.isArray(object[key]))){
                target[key] = target[key] || {};
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