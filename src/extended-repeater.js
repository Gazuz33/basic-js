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

  let arr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(options.addition);
  }

  let str1 = arr.join(options.additionSeparator);
  let str2 = str1 + str1;
  let arrayStr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    arrayStr.push(str2);
  }
   return arrayStr.join(options.separator);
};
