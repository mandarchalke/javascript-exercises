const leapYears = function (year) {
    if (year % 100 === 0) { // this check if year is century.
        if (year % 400 === 0) { // if above is true it check for leap.
            return true;
        } else {
            return false;
        }
    } else if (year % 4 === 0) { // this will be executed if year is not century.
        return true;
    } else {
        return false;
    }
};

// return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0); this is solution code is very compact and uses conditionals.
// Do not edit below this line
module.exports = leapYears;

