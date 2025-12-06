function hasCity(county, cities){
    return function (city){
        for (let i = 0; i < cities.length; i++) {
            if (cities[i] === city){
                return `${city} is a city from ${county}`
            }else{
                return `${city} is not a city from ${county}`
            }
        }
    } 
}