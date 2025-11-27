const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const secEarthYear = 31557600;

function dogYears(planet, secDogAge){
    const orbitalPeriod = orbitalPeriods[planet];
    const agePlanetYear = (secDogAge / secEarthYear) / orbitalPeriod;
    const dogYear = agePlanetYear * 7;

  return Number(dogYear.toFixed(2));
}
