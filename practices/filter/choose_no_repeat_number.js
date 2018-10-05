'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  const newarray = [];
  
  newarray.push(collection[0]);
  for(let i = 0;i < collection.length;i++){
    let only;
    for(let j = 0;j < newarray.length;j++){
      if(collection[i] !== newarray[j]){
        only = true;
      }else{
        only = false;
      }
    }
    if(only === true){
      newarray.push(collection[i]);
    }
  }
  return newarray;
}

module.exports = choose_no_repeat_number;
