function pronoun(str){
    const pronoun = ["I", "you", "he", "she", "it", "we", "they"]
    str = str.replace(/[.,;:!?]/g, ' ');
    const arr = str.split(" ")
    let res = {}
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        if (pronoun.includes(word)){
            if(!res[word]){
                res[word] = {word : [], count : 0}
            }
            res[word].count++
            const nextWord = arr[i + 1]
            if(nextWord){
            res[word].word.push(nextWord)
            }
        }
    }
    return res
}

console.log(pronoun(`The seal method seals an object, preventing new properties from being
 added to it and marking all existing properties as non-configurable. Values of present 
properties can still be changed as long as they are writable.`));
