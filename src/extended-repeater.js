const CustomError = require("../extensions/custom-error");

  module.exports = function repeater(str, options) {
  
  if (options.repeatTimes == undefined && options.additionRepeatTimes == undefined) {
    return str + options.addition;
  }
       if (options.additionSeparator == undefined) {
        options.additionSeparator = '|';
  }
        if (options.separator == undefined) {
          options.separator = '+';
  }
        if (options.addition === null) {
          options.addition = 'null';
        }

  let array = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    array.push(options.addition);
  }
  let arrayStr = [];
    
  let str = array.join(options.additionSeparator);
  let strNext = str + str;
        for (let i = 0; i < options.repeatTimes; i++) {
          arrayStr.push(strNext);
        }
   return arrayStr.join(options.separator);
};
