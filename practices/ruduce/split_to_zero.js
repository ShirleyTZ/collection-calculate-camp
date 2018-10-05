'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  let item = number
  if(number%interval === 0){
    for(;item > 0;item = item - interval){
      result.push(item.toFixed(1));
    }
  }else{
    for(;item > -interval;item = item - interval){
      result.push(item.toFixed(1));
    }
  }
  return result.map(Number);
}

module.exports = spilt_to_zero;
