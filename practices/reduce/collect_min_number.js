'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let result = collection[0];
  for(let i = 0;i < collection.length; i++){
    if(collection[i] < result){
      result = collection[i];
    }
  }
  return result;
}

module.exports = collect_min_number;

