// Code your solution in this file
function findMatching(drivers, someStrings) {
  let matchingDrivers = drivers.filter( name => name.toUpperCase() === someStrings.toUpperCase())
  return matchingDrivers
}

function fuzzyMatch(drivers, someStrings) {
  let matchingDrivers = drivers.filter( name => name.startsWith(someStrings))
  return matchingDrivers
}

function matchName(drivers, someStrings) {
  let matchingDrivers = drivers.filter( check => check.name === someStrings)
  return matchingDrivers;
}