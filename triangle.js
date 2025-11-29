function triangle(str, nbr){
    let res = ""
    for (let i = 1; i <= nbr; i++) {
        res += str.repeat(i) + "\n"
    }
    return res.slice(0, res.length - 1)
}
