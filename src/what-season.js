const CustomError = require( "../extensions/custom-error" );

module.exports = function getSeason( date ) {

    if ( !date )
        return 'Unable to determine the time of year!';

    if ( date.toString().indexOf(String(date.getFullYear())) === -1) {
        throw "Error";
    }
    const season = [ 'winter', 'spring', 'summer', 'autumn' ]
    let month = date.getMonth();
    if ( month <= 1 ) return season[ 0 ];
    if ( month <= 4 ) return season[ 1 ];
    if ( month <= 7 ) return season[ 2 ];
    if ( month <= 10 ) return season[ 3 ];
    return season[ 0 ];
};
