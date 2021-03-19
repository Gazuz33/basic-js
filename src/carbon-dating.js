const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleAct ) {

    let parsed = parseFloat( sampleAct);
    if ( !sampleAct || typeof ( sampleAct ) != "string" || sampleAct < 0 || isNaN( parsed ) || sampleAct > 15 || parsed === 0 )
        return false;
  
    return Math.ceil( -HALF_LIFE_PERIOD * Math.log2( parsed / MODERN_ACTIVITY ) );
};
