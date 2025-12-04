function dayOfTheYear(date){
    let year = date.getUTCFullYear() + ""
    let format = year.padStart(4,"0")
    let start = new Date(format+"-01-01")
    let diffDate = date - start
    return (diffDate / 1000 / 60 / 60 / 24) + 1

}

console.log(dayOfTheYear(new Date('0001-01-01')));
