// Code your solution in this file
function findMatching(drivers, someStrings) {
  let matchingDrivers = drivers.filter( name => name.toUpperCase() === someStrings.toUpperCase())
  return matchingDrivers
}