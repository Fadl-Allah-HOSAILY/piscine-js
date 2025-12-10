function pronoun(str){
    const pronoun = ["I", "you", "he", "she", "it", "we", "they"]
    let res = {}
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (pronoun.includs(str[i])){
            if(!res[str[i]]){
                res[str[i]] = {word : [], count : 0}
            }
            res[str[i]].count++
            const nextWord = str[i + 1]
            if(nextWord && pronoun.includs(nextWord)){
            res[str[i]].word.push(nextWord)
            }
        }
    }
    return res
}