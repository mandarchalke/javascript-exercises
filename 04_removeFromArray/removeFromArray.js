const removeFromArray = function(array, ...arg) {
   arg.forEach((element) => { // for each arg element
    const index = array.indexOf(element); // we are finding index of element which is same as arg inside array.
    if (index > -1) {
        array.splice(index, 1); //here we pass index if found similar arr.splice will remove that element.
    }
   });
   return array; // this returns new modified array.
};

// Do not edit below this line
module.exports = removeFromArray;

