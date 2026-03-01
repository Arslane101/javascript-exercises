const reverseString = function(string) {
    array = string.split("")
    result = []
    for (i= array.length-1 ; i>=0; i--){
        result.push(array[i])
    }
    return result.join("")



};

// Do not edit below this line
module.exports = reverseString;
