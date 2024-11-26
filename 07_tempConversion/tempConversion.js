const convertToCelsius = function(F) {

  let result = (F-32)*(5/9);
  let rounded = Math.round(result * 10) / 10
  return rounded;

};

const convertToFahrenheit = function(C) {

  let result = (C*(9/5))+32;
  let rounded = Math.round(result * 10) / 10
  return rounded;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
