const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
    if (date == undefined) {
        return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw "Error";
    }
    return Season[date.toString().split(" ")[1]];
};

let mounth = {
    "Dec": "winter", "Jan": "winter", "Feb": "winter", "Mar": "spring", "Apr": "spring", "May": "spring", "Jun": "summer", "Jul": "summer", "Aug": "summer", "Sep": "autumn", "Oct": "autumn", "Nov": "autumn"
}
