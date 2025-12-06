function hasCity(county, cities) {
    return function (city) {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i] === city) {
                return `${city} is a city from ${county}`
            }
        }
        return `${city} is not a city from ${county}`
    }
}

const county = "morocco"
const cities = ["rabat", "oujda", "casablanca", "fes", "marrakech"]
const city = "taza"
console.log(hasCity(county, cities)(city));
