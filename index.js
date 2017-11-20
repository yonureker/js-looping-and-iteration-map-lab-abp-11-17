// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(x => x.toLowerCase())
}

function nametoAttributes(names){
  names.map(function(name){
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    return {firstName: fName, lastName: lName}
  })
