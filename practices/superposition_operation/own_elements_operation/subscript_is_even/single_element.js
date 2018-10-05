'use strict';
var single_element = function(collection){
    let result = [];
    let newarray = [];
    for(let i = 1; i < collection.length;i = i + 2){
        newarray.push(collection[i]);
    }
    for(let j = 0; j < newarray.length; j++){
        let num = 0;
        for(let k = 0;k < newarray.length; k++){
            if(newarray[j] === newarray[k]){
                num++;
            }
        }
        if(num === 1){
            result.push(newarray[j]);
        }
    }
    return result;
};
module.exports = single_element;
