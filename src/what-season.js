const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
    if (!== date) {
        return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw "Error";
    }
    return Season[date.toString().split(" ")[1]];
};

let mounth = {
    "12": "winter", "01": "winter", "02": "winter", "03": "spring", "04": "spring", "05": "spring", "06": "summer", "07": "summer", "08": "summer", "09": "autumn", "10": "autumn", "11": "autumn"
}
