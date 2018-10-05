'use strict';
var is_exist_element = function(collection,element){
    let have = false;
    for(let i = 0 ; i < collection.length; i = i + 2){
        if(collection[i] === element){
            have = true;
            return true;
        }
    }
    if(!have){
        return false;
    }
};
module.exports = is_exist_element;
