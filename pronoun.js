function pronoun(str){
    const pronoun = ["i", "you", "he", "she", "it", "we", "they"]
    str = str.replace(/[.,;:!?\n]/g, ' ');
    
    str = str.toLowerCase()
    console.log(str);
    const arr = str.split(" ")
    let res = {}
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        if (pronoun.includes(word)){
            if(!res[word]){
                res[word] = {word : [], count : 0}
            }
            res[word].count++
            const nextWord = arr[i + 1];
            if (nextWord && !pronoun.includes(nextWord)) {
                res[word].word.push(nextWord);
            }
        }
    }
    return res
}
console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'));
