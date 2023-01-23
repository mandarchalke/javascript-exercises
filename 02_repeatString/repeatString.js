const repeatString = function(string, times) {
    let emptyString = "";
    if (times < 0) {
        return "ERROR"
    } else {
    while (times > 0) {
        emptyString += string;
        times--;
    }
    return emptyString;
}
};

// Do not edit below this line
module.exports = repeatString;
