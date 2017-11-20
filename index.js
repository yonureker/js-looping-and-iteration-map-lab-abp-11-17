// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(x => x.toLowerCase())
}

function nametoAttributes(array){
  names.map(function(name){
    let fName = array.split(" ")[0];
    let lName = array.split(" ")[1];
    return {firstName: fName, lastName: lName};
  })
};
