function triangle(str, nbr){
    let res = ""
    for (let i = 0; i <= nbr; i++) {
        res += str.repeat(i) + "\n"
    }
    return res
}