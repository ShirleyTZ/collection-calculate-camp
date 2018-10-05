'use strict';

function compute_average(collection) {
  //在这里写入代码
  let num = 0;
  let cLength = collection.length;
  for(let i = 0; i < collection.length;i++){
    num = num + collection[i];
  }
  return num/cLength;
}

module.exports = compute_average;

