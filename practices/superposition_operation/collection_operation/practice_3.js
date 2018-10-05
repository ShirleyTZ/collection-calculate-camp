'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let num = 0;
  for(let i = 0; i < collection.length; i++){
    if(collection[i]%2 !== 0){
      num = num + collection[i]*3 + 5;
    }
  }
  return num;
}

module.exports = hybrid_operation_to_uneven;

