'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  const newarray = [];
  if(number_a < number_b){
    if(number_a%2 === 0){
      for(let item = number_a;item <= number_b;item = item+2){
        newarray.push(item);
      }
    }else{
      for(let item = number_a+1;item <=  number_b;item = item+2){
        newarray.push(item);
      }
    }
  }else{
    if(number_a%2 === 0){
      for(let item = number_a;item >= number_b;item = item-2){
        newarray.push(item);
      }
    }else{
      for(let item = number_a-1;item >=  number_b;item = item-2){
        newarray.push(item);
      }
    }
  }
  return newarray;
}

module.exports = get_integer_interval_2;
