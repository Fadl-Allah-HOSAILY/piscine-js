function filterShortStateName(arr) {
    return arr.filter(str => (str.length < 7))
}

function filterStartVowel(arr) {
    function vowel(str) {
        const first = str[0].toLowerCase()
        return ["a", "e", "i", "o", "u"].includes(first);
    }
    return arr.filter(str => (vowel(str)))
}

const regexp = /[aeiou]/gi;

function filter5Vowels(arr) {
    return arr.filter(str => {
        const array = str.match(regexp) || []
        return array.length >= 5
    })
}

function filter1DistinctVowel(arr) {
    return arr.filter(str => {
        str = str.toLowerCase()
        const array = str.match(regexp) || []
        const unique = new Set(array)
        return unique.size === 1
    })
}

function multiFilter(arr) {
    function filterStartVowel(str) {
        str = str.toLowerCase();
        return ["a", "e", "i", "o", "u"].includes(str[0]);
    }
    return arr.filter(obj => {
        return obj.capital.length >= 8 &&
            !filterStartVowel(obj.name) &&
            /[aeiou]/i.test(obj.tag) &&
            obj.region !== "South"
    })
}