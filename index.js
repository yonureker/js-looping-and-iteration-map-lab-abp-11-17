// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(function(x){
    return x.toLowerCase()
  })
}

/*function nameToAttributes (array) {
  return array.map(array =>
  let fName = name.split(" ")[0];
  let lName = name.split(" ")[1];
  return {firstName: fName, lastname: lName}
})
