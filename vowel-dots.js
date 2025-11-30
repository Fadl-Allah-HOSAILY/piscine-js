function vowelDots(str){
    const vowels = /[aeiou]/gi;
    let res = str.replace(vowels, "$&.")
    return res
}