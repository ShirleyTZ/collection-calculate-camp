'use strict';

function choose_even(collection) {

  //在这里写入代码
  const newarray =[];
  for(let i = 0;i < collection.length;i++){
    let item = collection[i];
    if(item%2 === 0){
      newarray.push(item);
    }
  }
  return newarray;
}

module.exports = choose_even;
