// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase())
}

function nametoAttributes(drivers){
  return drivers.map(driver =>
    let fName = driver.split(" ")[0];
    let lName = driver.split(" ")[1];
    return {firstName: fName, lastName: lName};
  })
};
