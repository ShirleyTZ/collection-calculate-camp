'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = [];
  let num;
  for(let i = 0; i < collection.length; i++){
    if(collection[i]%2 !== 0){
      num = collection[i]*3 + 2;
      result.push(num);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

