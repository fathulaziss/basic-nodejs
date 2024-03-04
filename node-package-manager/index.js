const _ = require('lodash');
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);

/*
How To Run on root project : node ./node-package-manager/index.js
*/