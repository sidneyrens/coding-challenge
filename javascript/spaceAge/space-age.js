const earthYears = (ageInSeconds) => {
  return ageInSeconds / 31557600
}

const orbitalPeriod = (planet) => {
  switch (planet) {
    case 'mercury':
      return 0.2408467
    case 'venus':
      return 0.61519726
    case 'earth':
      return 1.0
    case 'mars':
      return 1.8808158
    case 'jupiter':
      return 11.862615
    case 'saturn':
      return 29.447498
    case 'uranus':
      return 84.016846
    case 'neptune':
      return 164.79132
    default: 
      return "that isn't a planet"
  }
}

export const age = (planet, ageInSeconds) => {
  const earthAge = earthYears(ageInSeconds)
  return parseFloat((earthAge/orbitalPeriod(planet)).toFixed(2))
}
