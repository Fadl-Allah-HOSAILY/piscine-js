const vowels = /[aeiou]/gi;
function vowelDots(str){
    let res = str.replace(vowels, "$&.")
    return res
}
console.log(vowels.test("a"));
console.log(vowels.test("c"));
