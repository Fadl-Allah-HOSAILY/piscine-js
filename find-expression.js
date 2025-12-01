function findExpression(num){
    function searsh(current, exp){
        if (current === num) return exp
        if (current > num) return undefined

        let add4 = searsh(current+4, exp + " +4");
        if (add4 !== undefined) return add4;

        let mul2 = searsh(current*2, exp + " *2");
        if (mul2 !== undefined) return mul2;

        return undefined
    }
    return searsh(1, "1")

}