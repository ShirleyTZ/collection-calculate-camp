'use strict';

function amount_even(collection) {

  //在这里写入代码
  let num = 0;
  for(let i = 0; i < collection.length; i++){
    if(collection[i]%2 === 0){
      num = num + collection[i];
    }
  }
  return num;
}

module.exports = amount_even;
