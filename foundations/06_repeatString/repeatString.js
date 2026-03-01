const repeatString = function(string,number) {
    if (number < 0) {return "ERROR"}
    copy = string
    for (let i=1 ; i<number ; i++){
    string+=copy
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
