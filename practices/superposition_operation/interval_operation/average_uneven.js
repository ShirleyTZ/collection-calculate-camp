'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let result = [];
  let num = 0;
  for(let i = 0; i < collection.length; i++){
    if(collection[i]%2 !== 0){
      num = num + collection[i];
      result.push(collection[i]);
    }
  }
  return num/result.length;
}


module.exports = average_uneven;
