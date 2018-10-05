'use strict';
var even_asc_odd_desc = function(collection){
    let oddArray =[];
    let evenArray = [];
    for(let i = 0; i < collection.length; i++){
        if(collection[i]%2 === 0){
            evenArray.push(collection[i]);
        }else{
            oddArray.push(collection[i]);
        }
    }

    for(let i = 0; i < evenArray.length; i++){
        for(let j = 0; j < evenArray.length;j++){
          if(evenArray[i] < evenArray[j]){
            let item = evenArray[i];
            evenArray[i] = evenArray[j];
            evenArray[j] = item;
          }
        }
    }

    for(let i = 0; i < oddArray.length; i++){
        for(let j = 0; j < oddArray.length;j++){
          if(oddArray[i] > oddArray[j]){
            let item = oddArray[i];
            oddArray[i] = oddArray[j];
            oddArray[j] = item;
          }
        }
    }
    for(let i = 0;i < oddArray.length; i++){
        evenArray.push(oddArray[i]);
    }
    return evenArray;

};

module.exports = even_asc_odd_desc;
