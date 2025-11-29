const get = (src,path) => {
    let keys = path.split(".");
    let current = src;
    for (let key of keys) {
        if ((current === null) || !(key in current)) {
            return undefined;
        }
        current = current[key];
    }
    return current;
};

