const sign = (nbr) => (nbr === 0) ? 0 : (nbr > 0) ? 1 : -1;

const sameSign = (num1, num2) => (sign(num1) === sign(num2)) ? true : false;