'use strict';
var calculate_median = function(collection){
    let num;
    let result = [];
    let median;
    for(let i = 0; i < collection.length; i++){
        if(collection[i]%2 === 0){
            result.push(collection[i]);
        }
    }
    if(result.length%2 === 0){
        num = result.length/2-1;
        median = (result[num] + result[num +1])/2;
    }else{
        num = (result.length-1)/2;
        median = result[num];
    }
    return median;
};
module.exports = calculate_median;
