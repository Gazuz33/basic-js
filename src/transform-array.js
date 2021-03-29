const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error();
  }
  
  let newArr = [];
  var i = 0;

       while (i < arr.length) {
        if (arr[i] == '--discard-next' && (i != arr.length - 1)) {
          if ((arr[i + 2] == '--discard-prev') || (arr[i + 2] == '--double-prev')) {
            i += 3;
          } else {
            i += 2; 
          }
        } else if (arr[i] == '--double-next' && (i != arr.length - 1)) {
            newArr.push(arr[i + 1]);
            newArr.push(arr[i + 1]);
            i += 2;
        } else if (arr[i] == '--discard-prev' && (i != 0)) {
            newArr.pop();
            i++;
        } else if (arr[i] == '--double-prev' && (i != 0)) {
            newArr.push(newArr[newArr.length - 1]);
            i++;
        } else if ((arr[i] == '--double-prev') || (arr[i] == '--discard-prev') && (i === 0)) {
            i++;
        } else if ((arr[i] == '--discard-next') || (arr[i] == '--double-next') && (i === arr.length - 1)) {
          return newArr;
        } else {
            newArr.push(arr[i]);
            i++;
        }
  }
  return newArr;
};
