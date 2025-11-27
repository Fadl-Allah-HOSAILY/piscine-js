
const isPositive = (nbr) => (nbr >= 0)

function abs(num){
    if (isPositive(num)) {
        return num
    }else{
        return -num
    }
}

console.log(abs(0))