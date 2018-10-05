'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  const result=[];
  if(number_a < number_b){
    for(let item = number_a;item <= number_b;item++){
      result.push(item);
    }
  }else{
    for(let item = number_a;item >= number_b;item--){
      result.push(item);
    }
  }
  return result;
}

module.exports = get_integer_interval;

