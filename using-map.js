function citiesOnly(arr){
    return arr.map(obj => obj.city)
}

function upperCasingStates(arr){
    return arr.map(str => {
        let newArr = str.split(" ").map(s => {
            return s[0].toUpperCase() + s.slice(1)
        })
        return newArr.join(" ")
    })
}

function fahrenheitToCelsius(arr){
    return arr.map(deg => {
        return Math.floor(+(deg.slice(0, deg.length -2) - 32) * 5 / 9) + "°C"
    })
}

function trimTemp(arr){
    return arr.map(temp =>{

            temp.temperature = temp.temperature.trim().split(" ").join("")
        
        return temp
    })
}

function tempForecasts(arr){
    function toCel(str){
        str = str.split(" ").join("")
        str = str.slice(0, str.length - 2)
        const fahren = +str
        return Math.floor((fahren - 32) * 5 / 9) + "°Celsius"
    }
    function toUpper(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

    return arr.map(obj => {
        return `${toCel(obj.temperature)} in ${obj.city}, ${toUpper(obj.state)}`
        
    })
}