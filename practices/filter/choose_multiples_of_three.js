'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  const newarray = [];
  for (let i = 0; i < collection.length; i++){
    let item = collection[i];
    if(item%3 === 0){
      newarray.push(item);
    }
  }
  return newarray;
}

module.exports = choose_multiples_of_three;
