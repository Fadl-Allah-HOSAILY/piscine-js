function pyramid(str, nbr){
    let res = ""
    for (let i = 1; i <= nbr; i++) {
        let space = (nbr - i) * str.length
        let chars = 2*i - 1

        res += " ".repeat(space) + str.repeat(chars) + "\n"
    }
    return res.slice(0, res.length - 1)
}
