// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(array => array.toLowerCase())
}

function nameToAttributes (array) {
  return array.map(array => Object.assign({},array))
}
