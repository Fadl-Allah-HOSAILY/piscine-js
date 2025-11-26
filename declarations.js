const escapeStr = "\`\\/\"'";
const arr = [4, '2'];
const obj = {
    str : "hello world",
    num : 5,
    bool : true,
    undef : undefined
};
const neasted = {
    arr : [4, undefined, '2'],
    obj : {
        str : "salam",
        num : 5,
        boo : false
    }
};
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(neasted);
