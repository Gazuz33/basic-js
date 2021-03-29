const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const Step = 2 ** disksNumber - 1;
  const fullTime = Math.floor(3600 / turnsSpeed * Step);

     return {
    turns: Step,
    seconds: fullTime
     }
};
