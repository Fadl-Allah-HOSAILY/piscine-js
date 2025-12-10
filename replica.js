function replica(target, ...source) {
    for (let i = 0; i < source.length; i++) {
        let object = source[i]
        for (const key in object) {
            const value = object[key];
            if (value && typeof value === "object" && !Array.isArray(value)) {
                target[key] = target[key] || {};
                replica(target[key], value);
            } else if (Array.isArray(value)) {
                target[key] = [...value];
            } else {
                target[key] = value;
            }
        }
    }
    return target;
}