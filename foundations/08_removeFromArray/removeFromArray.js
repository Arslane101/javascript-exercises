const removeFromArray = function(array) {
    for (let i=1 ; i<=arguments.length;i++){
        position = array.indexOf(arguments[i])
        while (position > -1 ){
            array.splice(position,1)
            position = array.indexOf(arguments[i])
            }
    }
    return array
};
// Do not edit below this line
module.exports = removeFromArray;
