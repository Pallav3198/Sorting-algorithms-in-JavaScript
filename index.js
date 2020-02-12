/* Algorithms in JavaScript (algos-in-js), by Saksham Saxena */

// Helper function to map all methods directly to the Algorithm prototype
function mixin(mixinsObject) {
  for (var prop in mixinsObject) {
    if (mixinsObject.hasOwnProperty(prop)) {
      Algorithms.prototype[prop] = mixinsObject[prop];
    }
  }
}

// Contruct an empty construct
var Algorithms = function () {};

// Mix in all the module methods to the main prototype
mixin(require('./src/sorting/index.js'));

// Export the main construct
module.exports = Algorithms;