const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'}) {
  addition = String(addition);
  let arrAdd = [];
  let strAdd = '';
  if (additionRepeatTimes == 0) {
    strAdd = addition;
  } else {
    for (let j=0; j<additionRepeatTimes; j++) {
     arrAdd.push(addition);
    }
    strAdd = arrAdd.join(additionSeparator);
    }
  str = str + strAdd;
  let arr = [];
  let strNew = '';
  if (repeatTimes == 0) {
    return str;
  } else {
    for (let i=0; i<repeatTimes; i++) {
     arr.push(str);
    }
    strNew = arr.join(separator);
    }
  return strNew;
};
  
