'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  
  for(let i = 0; i < collection.length; i++){
    if(collection[i] === element){
      return i;
    }
  }
  return i;
}

module.exports = calculate_elements_sum;

