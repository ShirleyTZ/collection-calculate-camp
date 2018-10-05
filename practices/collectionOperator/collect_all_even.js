'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  const newarray = [];
  for(let n = 0;n < collection.length;n++){
    if(collection[n]%2 == 0){
      newarray.push(collection[n]);
    }
  } 
  return newarray;
}

module.exports = collect_all_even;
