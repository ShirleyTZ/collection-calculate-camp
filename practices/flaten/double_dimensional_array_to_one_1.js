'use strict';

function double_to_one(collection) {

  //在这里写入代码
  const result = [];
  for(let i = 0; i < collection.length; i++){
    if(Array.isArray(collection[i])){
      for(let j = 0; j < collection[i].length;j++){
        result.push(collection[i][j]);
      }
    }else{
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
