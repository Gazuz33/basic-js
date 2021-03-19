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

 let month = date.getMonth();
    if ( month <= 1 ) return "winter";
    if ( month <= 4 ) return "spring;
    if ( month <= 7 ) return "summer";
    if ( month <= 10 ) return "autumn";

}
