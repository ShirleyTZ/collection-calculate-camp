'use strict';
var calculate_average = function(collection){
    let num = 0;
    let result = [];
    for(let i = 0; i < collection.length; i++){
        if((i+1)%2 === 0){
            num = num + collection[i];
            result.push(collection[i]);
        }
    }
    return num/result.length;
};
module.exports = calculate_average;
