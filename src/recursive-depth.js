const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calcDepth(arr) {
    let counter = 1;
    let max = 0;
    arr.forEach(el => {
           if (Array.isArray(el)) {
              max = Math.max(this.calcDepth(el), max);
            }
    });
    return counter + max;
    };
};
