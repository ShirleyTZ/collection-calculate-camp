'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let num = 0 ;
  for(let i = 0; i < collection.length; i++){
    num = num + collection[i];
  }
  return num;
}

module.exports = calculate_elements_sum;

