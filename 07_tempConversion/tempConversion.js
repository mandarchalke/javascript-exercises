const convertToCelsius = function (temp) { // code could have been in one line.
  let ans = (temp - 32) * 5 / 9;
  return Math.round(ans * 10)/ 10; // ans calculation could have been written inside this line making code compact.
};

const convertToFahrenheit = function (temp) {
  let ans = (temp * 9/5) + 32;
  return Math.round(ans *10)/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
