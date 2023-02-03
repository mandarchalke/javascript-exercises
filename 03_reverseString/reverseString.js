const reverseString = function (string) {
    let newStringArray = string.split("", string.length); // converts string into array
    let reversedNewStringArray = newStringArray.reverse(); // reverses array
    let reversedString = reversedNewStringArray.join(""); // joins array 
    return reversedString;
    //return string.split("").reverse().join("");// This is actual solution where multiple methods are written in one line.
};

// Do not edit below this line
module.exports = reverseString;
