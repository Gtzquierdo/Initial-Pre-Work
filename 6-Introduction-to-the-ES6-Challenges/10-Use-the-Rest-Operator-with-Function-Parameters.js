// Rest operator eliminates the need to check the args array. Allows us to apply on parameters
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4));
