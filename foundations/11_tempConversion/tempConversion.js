const convertToCelsius = function(temperature) {
  var multiplier = Math.pow(10, 1 || 0);
  value =   ((temperature-32)*(5/9))
  return (Math.round(value * multiplier) / multiplier)
  };

const convertToFahrenheit = function(temperature) {
  var multiplier = Math.pow(10, 1 || 0);
   value =   ((temperature*(9/5))+32)
  return (Math.round(value * multiplier) / multiplier)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
